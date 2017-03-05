FROM node:latest
MAINTAINER ruiming <ruiming.zhuang@gmail.com>

WORKDIR /onlinejudge
COPY . /onlinejudge/
RUN yarn install
EXPOSE 8000
ENTRYPOINT node index.js