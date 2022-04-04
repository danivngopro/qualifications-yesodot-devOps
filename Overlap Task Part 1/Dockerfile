<<<<<<< HEAD
FROM node:14.8-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
RUN npm install && npm run build

FROM node:14.8-alpine AS prod
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
RUN npm run install:prod
ENTRYPOINT [ "node", "/app/dist/index.js" ]
=======
FROM node:14.8-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY ./src ./src
RUN npm install && npm run build

FROM node:14.8-alpine AS prod
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
RUN npm run install:prod
ENTRYPOINT [ "node", "/app/dist/index.js" ]
>>>>>>> 8b76df367b8f9a89ace3b9397c9c1ab0a28c74b2
EXPOSE 3000