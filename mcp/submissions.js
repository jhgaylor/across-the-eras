// Anonymous show submissions. Clients send declarative data only; this module generates the
// two classic-script files itself so untrusted JavaScript is never evaluated by the server.
const crypto = require("node:crypto");
const { z } = require("zod");

const COLOR = /^#[0-9a-f]{6}$/i;
const KEY = /^[a-z][a-z0-9-]{0,39}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const shortText = (max = 200) => z.string().trim().min(1).max(max);
const color = z.string().regex(COLOR, "use a six-digit hex color such as #3aa0ff");
const webUrl = z.string().url().max(2048).refine(value => /^https?:\/\//i.test(value), "must use http or https");
const showSchema = z.object({
  slug: z.string().min(2).max(60).regex(SLUG),
  title: shortText(120),
  subtitle: shortText(120).default("Across the Eras"),
  blurb: shortText(600),
  emoji: shortText(16),
  tvmazeId: z.union([z.number().int().positive(), z.array(z.number().int().positive()).min(1).max(10)]),
  axis: z.enum(["season", "episode"]),
  accent: color,
  accentText: color,
  heroGradient: color,
  heroFont: z.object({ google: shortText(200), family: shortText(200) }),
  regularsNote: shortText(1000),
  chartHint: z.string().trim().max(500).optional(),
  credits: z.string().trim().max(500).optional(),
});
const episodeSchema = z.object({
  id: z.number().int().positive(),
  s: z.number().int().positive(),
  e: z.number().int().nonnegative(),
  title: shortText(300),
  air: z.string().trim().max(20),
  summary: z.string().trim().max(10000),
  img: webUrl.or(z.literal("")),
  rating: z.number().min(0).max(10).nullable(),
});
const barSchema = z.object({
  label: shortText(300),
  start: z.number().int().positive(),
  end: z.number().int().positive(),
  background: color,
  foreground: color.optional(),
});
const categorySchema = z.object({
  key: z.string().regex(KEY),
  label: shortText(120),
  rows: z.array(z.array(barSchema).min(1).max(100)).min(1).max(40),
});
const tagDefSchema = z.object({ label: shortText(100), desc: shortText(500) });
const sourceSchema = z.object({ url: webUrl, label: z.string().trim().max(200).optional() });

const SUBMISSION_SCHEMA = z.object({
  show: showSchema,
  episodes: z.array(episodeSchema).min(1).max(1500),
  cast: z.record(z.string(), z.array(z.tuple([shortText(300), shortText(300)])).max(300)),
  chart: z.object({
    categories: z.array(categorySchema).min(1).max(20),
    seasonMeta: z.record(z.string().regex(/^\d+$/), z.object({ years: shortText(100), showrunner: shortText(300) })),
  }),
  tags: z.object({
    definitions: z.record(z.string().regex(KEY), tagDefSchema),
    episodes: z.record(z.string(), z.array(z.string().regex(KEY)).max(50)),
  }),
  notes: z.string().trim().min(1).max(30000),
  sources: z.array(sourceSchema).min(1).max(100),
});

const SUBMISSION_SHAPE = {
  submission: SUBMISSION_SCHEMA,
  confirmed: z.literal(true).describe("Must be true after the user has been told this will open a public GitHub pull request and confirms they want to submit it"),
};
const INDEX_KEYS = ["slug", "title", "subtitle", "emoji", "blurb", "episodeCount", "seasons", "accent", "accentText", "axis"];
const markdownSourceLines = sources => sources.map(source => {
  const label = (source.label || "").replace(/[\r\n]+/g, " ").replace(/@/g, "＠");
  return `- ${label ? `${label}: ` : ""}${source.url}`;
}).join("\n");

function validateSubmission(input, existingSlugs = []) {
  const parsed = SUBMISSION_SCHEMA.safeParse(input);
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.issues.slice(0, 100).map(i => `${i.path.join(".") || "submission"}: ${i.message}`), warnings: [] };
  }
  const data = parsed.data;
  const errors = [], warnings = [];
  const { show, episodes, cast, chart, tags } = data;
  if (existingSlugs.includes(show.slug)) errors.push(`shows/${show.slug} already exists`);

  const ids = new Set(), codes = new Set(), seasons = new Set();
  for (const ep of episodes) {
    const code = `${ep.s}.${ep.e}`;
    if (ids.has(ep.id)) errors.push(`duplicate TVmaze episode id ${ep.id}`);
    if (codes.has(code)) errors.push(`duplicate episode number ${code}`);
    ids.add(ep.id); codes.add(code); seasons.add(ep.s);
  }
  if (Object.keys(cast).length > 2000) errors.push("cast has more than 2,000 episode entries");
  for (const id of Object.keys(cast)) {
    if (!/^\d+$/.test(id) || String(+id) !== id) errors.push(`cast key ${id} must be a canonical positive TVmaze episode id`);
    else if (!ids.has(+id)) errors.push(`cast references unknown episode id ${id}`);
  }

  const expectedSeasons = [...seasons].sort((a, b) => a - b);
  if (expectedSeasons.some((season, i) => season !== i + 1)) errors.push("season numbers must be contiguous starting at 1");
  for (const season of expectedSeasons) if (!chart.seasonMeta[String(season)]) errors.push(`chart.seasonMeta is missing season ${season}`);
  for (const season of Object.keys(chart.seasonMeta)) if (!seasons.has(+season)) errors.push(`chart.seasonMeta has unknown season ${season}`);

  const categoryKeys = new Set();
  const maxUnit = show.axis === "episode" ? episodes.length : Math.max(...expectedSeasons);
  for (const category of chart.categories) {
    if (categoryKeys.has(category.key)) errors.push(`duplicate chart category key ${category.key}`);
    categoryKeys.add(category.key);
    category.rows.forEach((row, rowIndex) => {
      let previousEnd = 0;
      [...row].sort((a, b) => a.start - b.start).forEach(bar => {
        if (bar.start <= previousEnd) errors.push(`chart ${category.key} row ${rowIndex + 1} overlaps at "${bar.label}"`);
        if (bar.end < bar.start) errors.push(`chart bar "${bar.label}" ends before it starts`);
        if (bar.end > maxUnit) errors.push(`chart bar "${bar.label}" ends after ${show.axis} unit ${maxUnit}`);
        previousEnd = Math.max(previousEnd, bar.end);
      });
    });
  }

  const tagKeys = new Set(Object.keys(tags.definitions));
  if (!tagKeys.size) errors.push("tags.definitions must contain at least one tag");
  for (const [code, assigned] of Object.entries(tags.episodes)) {
    if (!codes.has(code)) errors.push(`tags.episodes references unknown episode ${code}`);
    assigned.forEach(key => { if (!tagKeys.has(key)) errors.push(`episode ${code} uses undefined tag ${key}`); });
  }
  const tagged = Object.values(tags.episodes).filter(x => x.length).length;
  if (tagged < episodes.length) warnings.push(`${episodes.length - tagged} of ${episodes.length} episodes have no curated tag`);
  if (!tags.definitions.fanfav) warnings.push("no `fanfav` tag is defined");
  if (!tags.definitions.arc && !tags.definitions.motw) warnings.push("neither `arc` nor `motw` is defined");

  const dates = episodes.map(e => e.air).filter(Boolean);
  if (dates.some((date, i) => i && date < dates[i - 1])) warnings.push("episodes do not appear to be in air-date order");
  return { ok: errors.length === 0, data, errors: [...new Set(errors)].slice(0, 200), warnings: [...new Set(warnings)] };
}

const json = value => JSON.stringify(value, null, 2);
function filesForSubmission(data, currentIndex = []) {
  const seasons = new Set(data.episodes.map(e => e.s));
  const show = { ...data.show, episodeCount: data.episodes.length, seasons: seasons.size };
  const eraCats = data.chart.categories.map(c => [c.key, c.label]);
  const eras = Object.fromEntries(data.chart.categories.map(c => [c.key,
    c.rows.map(row => row.map(b => [b.label, b.start, b.end, b.background, b.foreground || "#000000"]))]));
  const erasJs = `// Generated by the skipto.tv show-submission service from declarative data.\nwindow.ERA_CATS = ${json(eraCats)};\nwindow.ERAS = ${json(eras)};\nwindow.SEASON_META = ${json(data.chart.seasonMeta)};\n${show.axis === "episode" ? 'window.CHART_AXIS = "episode";\n' : ""}`;
  const tagsJs = `// Generated by the skipto.tv show-submission service from declarative data.\nwindow.TAG_DEFS = ${json(data.tags.definitions)};\nwindow.EP_TAGS = ${json(data.tags.episodes)};\n`;
  const sourceLines = markdownSourceLines(data.sources);
  const notes = `${data.notes.trim()}\n\n## Sources\n\n${sourceLines}\n`;

  const summary = Object.fromEntries(INDEX_KEYS.map(k => [k, show[k] ?? null]));
  const nextIndex = [...currentIndex.filter(x => x.slug !== show.slug), summary].sort((a, b) => a.slug.localeCompare(b.slug));
  const base = `shows/${show.slug}`;
  return {
    [`${base}/show.json`]: json(show) + "\n",
    [`${base}/episodes.json`]: json(data.episodes) + "\n",
    [`${base}/cast.json`]: json(data.cast) + "\n",
    [`${base}/eras.js`]: erasJs,
    [`${base}/tags.js`]: tagsJs,
    [`${base}/NOTES.md`]: notes,
    "shows/index.json": json(nextIndex) + "\n",
  };
}

function submissionGuide(enabled) {
  return {
    acceptsSubmissions: enabled,
    workflow: [
      "Confirm the show is not already present with list_shows.",
      "Research episode metadata and guest cast from TVmaze; research eras and tags from reliable show-specific sources.",
      "Build one declarative submission matching submit_show's schema. Do not send JavaScript or HTML.",
      "Tell the user what will be submitted and ask for their confirmation before calling submit_show.",
      "The server validates the package, generates eras.js/tags.js, and opens a pull request for maintainer review.",
    ],
    conventions: {
      episodeTagKeys: "Use `season.episode`, for example `5.16`.",
      castKeys: "Use the numeric TVmaze episode id as a string.",
      chartUnits: "start/end are season numbers for a season-axis show, or 1-based absolute episode positions for an episode-axis show.",
      chartRows: "Bars within one row may not overlap. Use separate rows for concurrent cast members/arcs.",
      safety: "Only declarative data is accepted. The server creates the repository's JavaScript files; client-supplied code is never accepted.",
      quality: "Prefer a smaller accurate curation over guessed or padded tags. Include source URLs and disclose uncertainty in notes. Do not include user identity, private data, credentials, or copyrighted prose.",
    },
  };
}

let appToken = null;
const recentAttempts = [];
function consumeSubmissionCapacity(now = Date.now()) {
  const windowMs = 60 * 60 * 1000;
  while (recentAttempts.length && recentAttempts[0] < now - windowMs) recentAttempts.shift();
  const limit = +(process.env.MAX_SHOW_SUBMISSIONS_PER_HOUR || 5);
  if (!Number.isFinite(limit) || limit < 1) throw new Error("show submission rate limit is misconfigured");
  if (recentAttempts.length >= limit) throw new Error("the public submission service is at its hourly limit; please try again later");
  recentAttempts.push(now);
}

async function githubToken(fetchImpl = fetch) {
  if (process.env.GITHUB_TOKEN) return process.env.GITHUB_TOKEN;
  const appId = process.env.GITHUB_APP_ID;
  const installationId = process.env.GITHUB_APP_INSTALLATION_ID;
  const privateKey = (process.env.GITHUB_APP_PRIVATE_KEY || "").replace(/\\n/g, "\n");
  if (!appId || !installationId || !privateKey) throw new Error("show submissions are not configured");
  if (appToken && appToken.expires > Date.now() + 60_000) return appToken.value;
  const now = Math.floor(Date.now() / 1000);
  const encode = value => Buffer.from(JSON.stringify(value)).toString("base64url");
  const unsigned = `${encode({ alg: "RS256", typ: "JWT" })}.${encode({ iat: now - 30, exp: now + 540, iss: appId })}`;
  const signature = crypto.sign("RSA-SHA256", Buffer.from(unsigned), privateKey).toString("base64url");
  const jwt = `${unsigned}.${signature}`;
  const response = await fetchImpl(`https://api.github.com/app/installations/${installationId}/access_tokens`, {
    method: "POST", headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${jwt}`, "User-Agent": "skipto-tv", "X-GitHub-Api-Version": "2022-11-28" },
  });
  if (!response.ok) throw new Error(`GitHub App authentication failed (${response.status})`);
  const body = await response.json();
  appToken = { value: body.token, expires: new Date(body.expires_at).getTime() };
  return appToken.value;
}

async function submitToGitHub(data, warnings = [], options = {}) {
  const fetchImpl = options.fetchImpl || fetch;
  const token = options.token || await githubToken(fetchImpl);
  const repository = process.env.GITHUB_REPOSITORY || "jhgaylor/across-the-eras";
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository)) throw new Error("GITHUB_REPOSITORY must be owner/name");
  const apiBase = (process.env.GITHUB_API_URL || "https://api.github.com").replace(/\/$/, "");
  const api = async (path, init = {}, allowed = []) => {
    const response = await fetchImpl(`${apiBase}/repos/${repository}${path}`, {
      ...init,
      headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${token}`, "Content-Type": "application/json", "User-Agent": "skipto-tv", "X-GitHub-Api-Version": "2022-11-28", ...(init.headers || {}) },
    });
    if (!response.ok && !allowed.includes(response.status)) {
      let detail = ""; try { detail = (await response.json()).message || ""; } catch { }
      throw new Error(`GitHub request failed (${response.status}${detail ? `: ${detail}` : ""})`);
    }
    return { status: response.status, body: response.status === 204 ? null : await response.json() };
  };

  const openPulls = (await api("/pulls?state=open&per_page=100")).body;
  const prior = openPulls.find(pr => pr.head?.ref?.startsWith(`submissions/${data.show.slug}-`));
  if (prior) return { url: prior.html_url, number: prior.number, duplicate: true, branch: prior.head.ref };
  const openSubmissionCount = openPulls.filter(pr => pr.head?.ref?.startsWith("submissions/")).length;
  const maxOpen = +(process.env.MAX_OPEN_SHOW_SUBMISSIONS || 20);
  if (openSubmissionCount >= maxOpen) throw new Error("the public submission queue is full; please try again after maintainers review the open proposals");

  const remoteShow = await api(`/contents/shows/${data.show.slug}/show.json?ref=main`, {}, [404]);
  if (remoteShow.status !== 404) throw new Error(`shows/${data.show.slug} already exists on the main branch`);
  const ref = (await api("/git/ref/heads/main")).body.object.sha;
  const commit = (await api(`/git/commits/${ref}`)).body;
  const indexResponse = (await api("/contents/shows/index.json?ref=main")).body;
  const currentIndex = JSON.parse(Buffer.from(indexResponse.content.replace(/\n/g, ""), "base64").toString("utf8"));
  const files = filesForSubmission(data, currentIndex);
  const digest = crypto.createHash("sha256").update(JSON.stringify(data)).digest("hex").slice(0, 10);
  const branch = `submissions/${data.show.slug}-${digest}`;
  const sourceLines = markdownSourceLines(data.sources);
  const safeTitle = data.show.title.replace(/[\r\n]+/g, " ");
  const pullBody = [
    "## Community show proposal", "",
    `Adds \`${data.show.slug}\` (${data.episodes.length} episodes) from an anonymous skipto.tv MCP submission.`, "",
    "The submission service accepted declarative JSON and generated `eras.js` and `tags.js`; no client-supplied code was executed or committed.", "",
    warnings.length ? `### Validation warnings\n\n${warnings.map(w => `- ${w}`).join("\n")}\n` : "",
    `### Sources\n\n${sourceLines}`,
  ].filter(Boolean).join("\n");
  const openPullRequest = async () => (await api("/pulls", { method: "POST", body: JSON.stringify({
    title: `Add ${safeTitle}`, head: branch, base: "main", body: pullBody, maintainer_can_modify: true,
  }) })).body;
  const existingRef = await api(`/git/ref/heads/${branch}`, {}, [404]);
  if (existingRef.status !== 404) {
    const same = openPulls.find(pr => pr.head?.ref === branch);
    if (same) return { url: same.html_url, number: same.number, duplicate: true, branch };
    const recovered = await openPullRequest();
    return { url: recovered.html_url, number: recovered.number, duplicate: true, branch };
  }

  const blobs = await Promise.all(Object.entries(files).map(async ([path, content]) => {
    const blob = (await api("/git/blobs", { method: "POST", body: JSON.stringify({ content, encoding: "utf-8" }) })).body;
    return { path, mode: "100644", type: "blob", sha: blob.sha };
  }));
  const tree = (await api("/git/trees", { method: "POST", body: JSON.stringify({ base_tree: commit.tree.sha, tree: blobs }) })).body;
  const createdCommit = (await api("/git/commits", { method: "POST", body: JSON.stringify({ message: `feat: propose ${safeTitle}`, tree: tree.sha, parents: [ref] }) })).body;
  await api("/git/refs", { method: "POST", body: JSON.stringify({ ref: `refs/heads/${branch}`, sha: createdCommit.sha }) });
  const pull = await openPullRequest();
  return { url: pull.html_url, number: pull.number, duplicate: false, branch };
}

function submissionsEnabled() {
  return process.env.SUBMISSIONS_ENABLED === "true" && !!(process.env.GITHUB_TOKEN || (process.env.GITHUB_APP_ID && process.env.GITHUB_APP_INSTALLATION_ID && process.env.GITHUB_APP_PRIVATE_KEY));
}

module.exports = { SUBMISSION_SCHEMA, SUBMISSION_SHAPE, validateSubmission, filesForSubmission, submissionGuide, submitToGitHub, submissionsEnabled, consumeSubmissionCapacity };
