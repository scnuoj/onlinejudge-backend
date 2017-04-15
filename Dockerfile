FROM node:latest
MAINTAINER ruiming <ruiming.zhuang@gmail.com>

WORKDIR /onlinejudge
COPY yarn.lock /onlinejudge/
RUN yarn install --prod
COPY . /onlinejudge/
EXPOSE 8000
ENTRYPOINT node index.js