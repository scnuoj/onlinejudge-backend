import * as config from 'config'
import * as Redis from 'ioredis'
import { ICacheConfig } from 'app/dts/config'

const queueConfig = <ICacheConfig>config.get('Cache')

export const cache = new Redis(queueConfig.port, queueConfig.host, {
  password: queueConfig.password,
  db: queueConfig.db
})

cache.on('connect', () => console.log('缓存连接成功'))
cache.on('disconnect', () => console.log('缓存连接失败'))
cache.on('error', () => console.log('缓存连接出错'))
