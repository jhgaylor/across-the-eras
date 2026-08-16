#!/bin/sh
# nginx (daemonised, :8080, k8s probes hit its /healthz) + the MCP server as PID 1 (:8081, proxied at /mcp).
# If node dies the container exits and k8s restarts it; if nginx dies the readiness/liveness probes fail.
set -e
mkdir -p /run/nginx
nginx -t
nginx
exec node /app/mcp/server.js
