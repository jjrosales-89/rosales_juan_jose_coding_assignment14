FROM node:20-alpine AS build

WORKDIR /rosales_juan_jose_final_site

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build


FROM nginx:1.27-alpine

WORKDIR /rosales_juan_jose_final_site

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /rosales_juan_jose_final_site/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]
