# Community show submissions

The public MCP endpoint can accept a researched show package from someone who does not have a GitHub account. The
assistant sends declarative JSON to `submit_show`; the server validates it, generates the repository-native files,
creates a branch, and opens a pull request. A maintainer still reviews and merges every show.

## Why submissions are declarative

Normal show packages contain `eras.js` and `tags.js`. Those files are trusted code once they are in this repository,
but accepting and evaluating JavaScript from an anonymous MCP client would be remote code execution. The submission
API therefore accepts chart and tag objects, then generates both scripts with `JSON.stringify`. It accepts no paths,
filenames, HTML, or executable code from the client.

The tool derives `episodeCount` and `seasons`, updates `shows/index.json`, and creates exactly these files:

```
shows/<slug>/show.json
shows/<slug>/episodes.json
shows/<slug>/cast.json
shows/<slug>/eras.js
shows/<slug>/tags.js
shows/<slug>/NOTES.md
shows/index.json
```

`get_submission_guide` gives assistants the workflow and conventions. The full input contract is published as the
`submit_show` tool's JSON Schema, so clients do not need to scrape this repository. The server rejects duplicate
slugs, invalid references, unknown tags, chart overlaps, out-of-range bars, mismatched seasons, and oversized fields.
It returns coverage warnings without blocking a proposal, so uncertainty remains visible in the PR.

## GitHub App setup

Production uses the `skipto-tv-submissions` GitHub App (App ID `4810293`, installation ID `158608701`). It is owned
by `jhgaylor`, installed only on `jhgaylor/across-the-eras`, and has these repository permissions:

- Contents: read and write
- Pull requests: read and write
- Metadata: read

It has no webhook and no user authorization flow. Do not grant Actions, Administration, Secrets, or Workflow
permissions. The private key and configuration live in the self-hosted Infisical project `across-the-eras-qbd6`.
`k8s/infisicalsecret.yaml` materializes them as the `across-the-eras-github` Kubernetes Secret through a
Kubernetes-auth identity restricted to this namespace and service account; secret values never enter Git.

The Infisical project contains:

```
SUBMISSIONS_ENABLED=true
GITHUB_APP_ID=4810293
GITHUB_APP_INSTALLATION_ID=158608701
GITHUB_APP_PRIVATE_KEY=<PEM private key>
GITHUB_REPOSITORY=jhgaylor/across-the-eras
```

Operational limits can also be set in the secret:

```
MAX_SHOW_SUBMISSIONS_PER_HOUR=5
MAX_OPEN_SHOW_SUBMISSIONS=20
MAX_MCP_BODY_BYTES=4000000
```

`SUBMISSIONS_ENABLED` is the kill switch. Removing it or setting it to anything other than `true` leaves the guide
visible but makes `submit_show` return an unavailable response. A fine-grained `GITHUB_TOKEN` is supported for local
development, but the short-lived installation token from a narrowly installed GitHub App is preferred in production.

## Abuse and review boundary

Submissions are idempotent by content hash. A repeated package returns its existing PR. The service allows five
attempts per process per hour by default and refuses new work when twenty submission PRs are open. These controls cap
load; they are not a trust signal. CI validates every PR, and maintainers must still assess sourcing, copyright,
curation quality, visual quality, and whether the show belongs on skipto.tv.

The server-side App credential is never returned to an MCP client. A submission cannot merge, publish, modify an
existing show, choose a branch or file path, edit workflows, or write outside its generated show package and index.
The proposed package, notes, and source URLs become public in the pull request, so clients are instructed not to
include user identity, private data, credentials, or copied copyrighted prose.
