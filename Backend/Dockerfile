# ---- Build Stage ----
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm install

COPY src/ ./src/

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

COPY notes.json ./

EXPOSE 3000

CMD ["node", "dist/app.js"]