FROM node:lts-alpine AS builder
WORKDIR /usr/src/app

# Install dependencies (including dev) and build the Next.js app
COPY package.json package-lock.json* ./
RUN npm install --silent
COPY . .
RUN npm run build

FROM node:lts-alpine
WORKDIR /usr/src/app

# Copy only production files from builder
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.mjs ./next.config.mjs

ENV NODE_ENV=production
ENV PORT=3004
EXPOSE 3004
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
