# Static multi-show site: nginx serves the shell (index.html/app.js/styles.css) and shows/<slug>/ packages.
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html app.js styles.css /usr/share/nginx/html/
COPY shows/ /usr/share/nginx/html/shows/
EXPOSE 8080
