import * as config from 'config'
import * as Redis from 'ioredis'

const queueConfig = config.get('Cache') as Cache

interface Cache {
  db: number
  host: string
  port: number
  prefix: string,
  auth: string
}

const client = new Redis(queueConfig.port, queueConfig.host, {
  password: queueConfig.auth,
  db: queueConfig.db
})

client.on('connect', () => console.log('消息队列连接成功'))
client.on('disconnect', () => console.log('消息队列连接失败'))
client.on('error', () => console.log('消息队列连接出错'))

export default client
