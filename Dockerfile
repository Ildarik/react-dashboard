FROM node:12

WORKDIR /app

COPY . .

RUN yarn

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]
