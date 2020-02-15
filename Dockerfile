FROM node:12

WORKDIR /app

COPY . .

WORKDIR /app/client/

RUN yarn

RUN yarn build

WORKDIR /app/server/

RUN yarn

EXPOSE 80

CMD [ "yarn", "start" ]