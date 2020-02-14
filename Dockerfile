FROM node:12

WORKDIR /home/ildar/projects/mkdev-test-task/server

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]
