FROM node:latest
MAINTAINER ruiming <ruiming.zhuang@gmail.com>

RUN mkdir /onlinejudge
COPY ./package.json /onlinejudge
COPY ./yarn.lock /onlinejudge
RUN cd /onlinejudge && yarn

COPY ./ /onlinejudge

WORKDIR /onlinejudge

EXPOSE 8000

ENTRYPOINT yarn start
