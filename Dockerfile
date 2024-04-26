FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm run build:ui

EXPOSE 3003

WORKDIR /usr/src/app/backend

CMD ["npm", "start"]
