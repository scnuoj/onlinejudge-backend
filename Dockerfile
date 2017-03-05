FROM node:latest
MAINTAINER ruiming <ruiming.zhuang@gmail.com>

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

WORKDIR /onlinejudge
COPY . /onlinejudge/
RUN yarn install
EXPOSE 8000
ENTRYPOINT node index.js