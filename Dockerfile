FROM node:23-alpine3.20
EXPOSE 9090 8080
WORKDIR /app

COPY . .
RUN npm install

CMD [ "npm","run","start" ]
