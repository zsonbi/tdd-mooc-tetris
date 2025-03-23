FROM node:23-alpine3.20
EXPOSE 8080 8080
WORKDIR /app

COPY . .
RUN npm install

CMD [ "npm","run","start" ]
