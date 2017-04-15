const Redis = require('ioredis')
const cacheConfig = require('../helper/env')(require('config').get('Cache'))

const client = new Redis(cacheConfig.port, cacheConfig.host, {
  password: cacheConfig.auth,
  db: cacheConfig.db
})

client.on('disconnect', function () {
  console.log('缓存服务器断开')
})

client.on('error', function () {
  console.log('缓存组件出错')
})

global.Cache = client
