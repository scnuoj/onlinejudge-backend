const Redis = require('ioredis')
const cacheConfig = require('config').get('Cache')

const Cache = new Redis(cacheConfig.port, cacheConfig.host, {
  password: cacheConfig.auth,
  db: cacheConfig.db
})

Cache.on('connect', () => console.log('缓存连接成功'))
Cache.on('disconnect', () => console.log('缓存连接失败'))
Cache.on('error', () => console.log('缓存连接出错'))

global.CACHE = Cache
