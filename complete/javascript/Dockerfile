FROM node:16-alpine as build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --no-cache

COPY public/ public/
COPY src/ src/

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]