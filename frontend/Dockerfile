FROM node:22-alpine

WORKDIR /usr/src/frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g http-server

EXPOSE 8080

ENV PORT=8080

ENV REACT_APP_PORT=808

CMD ["npm", "run", "start"]