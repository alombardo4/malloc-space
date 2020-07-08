FROM node:12-alpine as builder

WORKDIR /app

ADD . .

ARG CONFIGURATION

RUN npm ci && npx ng build --configuration ${CONFIGURATION}

FROM nginx:alpine

COPY --from=builder /app/dist/malloc-space /usr/share/nginx/html