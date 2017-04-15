const Redis = require('ioredis')
const redisConfig = require('config').get('Redis')

const client = new Redis(redisConfig.port, redisConfig.host, {
  password: redisConfig.auth,
  db: redisConfig.db
})

client.on('disconnect', function () {
  console.log('缓存服务器断开')
})

client.on('error', function () {
  console.log('缓存组件出错')
})

global.Cache = client
