FROM alpine:latest

COPY . .

RUN apt-get update
RUN apt-get install -y nodejs

RUN npm install
RUN npm install serve
RUN npm run build

EXPOSE 3000

RUN npx serve build
