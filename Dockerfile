# One image, two processes: nginx serves the static site (index.html/app.js/filter.js/styles.css, docs/, shows/)
# on :8080 and proxies /mcp to the node MCP server on :8081. Both read the same shows/ files, so the website and
# the tools can never disagree about the data.
FROM node:24-alpine
RUN apk add --no-cache nginx

WORKDIR /app/mcp
COPY mcp/package.json mcp/package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY mcp/*.js ./
COPY filter.js /app/filter.js

COPY nginx.conf /etc/nginx/http.d/default.conf
COPY index.html app.js filter.js styles.css /usr/share/nginx/html/
COPY docs/ /usr/share/nginx/html/docs/
COPY shows/ /usr/share/nginx/html/shows/
COPY entrypoint.sh /entrypoint.sh

ENV SHOWS_DIR=/usr/share/nginx/html/shows PORT=8081 SITE_ORIGIN=https://eras.inevitable.fyi NODE_ENV=production
EXPOSE 8080
CMD ["/entrypoint.sh"]
