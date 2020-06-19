

FROM node:12.18.0-alpine3.12 as build

LABEL MAINTAINER="Marcelo <marceloguimaraes@outlook.com.br>"

LABEL VERSION="1.0.0"

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install --silent

RUN npm install react-scripts@3.4.1 -g --silent
COPY . /app

RUN npm run build

FROM nginx:1.16.0-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
