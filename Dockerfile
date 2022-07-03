FROM node:lts-alpine as build-stage

# Copy app
WORKDIR /app
COPY . .

# Install & build
RUN npm install
RUN npm run generate-client
RUN npm run build

# Apache
FROM httpd:2.4-bullseye
EXPOSE 80

# Copy resources
COPY --from=build-stage /app/dist /usr/local/apache2/htdocs

# Enable mod_rewrite
COPY .docker/httpd.conf /usr/local/apache2/conf/httpd.conf.append
RUN cat /usr/local/apache2/conf/httpd.conf.append >> /usr/local/apache2/conf/httpd.conf