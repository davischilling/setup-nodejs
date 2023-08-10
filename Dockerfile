FROM node:16-slim as BUILDER
LABEL maintainer="Davi Schilling"

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm istall

COPY src ./src

FROM node:16-alpine

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app ./

EXPOSE 3000

CMD ["npm", "start"]