# Node build
FROM node:16.14.2 AS nodebuilder

WORKDIR /availa-agube

# GIT ARGS
ARG GITLAB_AUTH_TOKEN
ARG APP_NAME
ARG GOOGLE_MAPS_API_KEY
ARG GOOGLE_ANALYTICS_ID
ARG AUTH_BACKEND_API_URL
ARG SUBSCRIPTION_BACKEND_API_URL
ARG CONTACT_BOOK_BACKEND_API_URL
ARG AGUBE_BACKEND_API_URL

RUN npm config set -- '@availa:registry=https://gitlab.com/api/v4/packages/npm/:_authToken' "$GITLAB_AUTH_TOKEN"
RUN npm config set -- '//gitlab.com/api/v4/packages/npm/:_authToken' "$GITLAB_AUTH_TOKEN"

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy code
COPY . .

# Config Frontend environments
RUN npm run config -- --APP_NAME=$APP_NAME --GOOGLE_MAPS_API_KEY=$GOOGLE_MAPS_API_KEY --GOOGLE_ANALYTICS_ID=$GOOGLE_ANALYTICS_ID --AUTH_BACKEND_API_URL=$AUTH_BACKEND_API_URL --SUBSCRIPTION_BACKEND_API_URL=$SUBSCRIPTION_BACKEND_API_URL --CONTACT_BOOK_BACKEND_API_URL=$CONTACT_BOOK_BACKEND_API_URL --AGUBE_BACKEND_API_URL=$AGUBE_BACKEND_API_URL

# Build
RUN npm run build

# Delete nginx files
RUN rm -r nginx

# NGINX publish
FROM nginx:1.21

# Copy config
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Permissions
RUN chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid
RUN chown -R nginx:nginx /usr/share/nginx/html

# User
USER nginx

# Copy Node build
COPY --from=nodebuilder /availa-agube/dist/agube-fe /usr/share/nginx/html