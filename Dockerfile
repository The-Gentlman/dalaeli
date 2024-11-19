FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /home/node/app
COPY pnpm-lock.yaml .npmr[c] ./
COPY package*.json ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm fetch



FROM base AS builder
WORKDIR /home/node/app
COPY --from=base /home/node/app/node_modules ./node_modules
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install -r
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm build

FROM node:20-slim AS runner
WORKDIR /home/node/app
ENV NODE_ENV production

COPY --from=builder /home/node/app/next.config.js ./
COPY --from=builder /home/node/app/public ./public
COPY --from=builder /home/node/app/package.json ./package.json
COPY --from=builder --chown=node:node /home/node/app/.next/standalone ./
COPY --from=builder --chown=node:node /home/node/app/.next/static ./.next/static

EXPOSE 3000
EXPOSE 8080

ENV PORT 3000
CMD ["node", "server.js"]
