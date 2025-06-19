FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY notes.json .

RUN npm run build

EXPOSE 8080

CMD ["node", "dist/app.js"]