FROM node:lts AS builder
WORKDIR /usr/src/docusaurus
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/docusaurus/build .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
