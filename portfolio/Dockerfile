# STEP 1: Build
FROM node:alpine AS build-stage
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# STEP 2: Serve
FROM nginx:alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY pgp.pub /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf