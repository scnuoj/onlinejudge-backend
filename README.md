[![Build Status](https://travis-ci.com/ruiming/onlinejudge-backend.svg?token=HtvQHFsSPpCoU81PmGeh&branch=develop)](https://travis-ci.com/ruiming/onlinejudge-backend)


# onlinejudge

> Backend of OnlineJudge



## 目录结构

- config

  存放配置文件, 避免写死一些参数和配置项, 便于以后重构修改

- libraries

  存放数据库或第三方接口库以及自定义库等

- middlewares

  存放 Koa 的中间件, 中间件可以对 request 和 response 做一些处理

- models

  存放 Model, model 实质上在 libraries 中的数据库已经定义, 这里可以对 model 进行一些扩展以及提供 mock 方法

- routes

  存放路由, 路由接收参数, 调用相应的 service 并返回结果

- services

  存放服务, 服务会操作一个或多个 model. 服务提供方法给路由调用

- tasks

  一些任务, 如生成 mock 数据和初始化数据库

- tests

  针对路由的集成测试以及针对服务的单元测试


