FROM node:16-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json .npmrc ./
COPY vite.config.ts ./
RUN npm ci

FROM node:16-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV production

RUN yarn build

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json package-lock.json
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.js ./server.js

RUN npm install --omit=dev

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
