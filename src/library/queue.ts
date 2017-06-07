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

const Q = new Redis(queueConfig.port, queueConfig.host, {
  password: queueConfig.auth,
  db: queueConfig.db
})

Q.on('connect', () => console.log('消息队列连接成功'))
Q.on('disconnect', () => console.log('消息队列连接失败'))
Q.on('error', () => console.log('消息队列连接出错'))

const Queue = {
  async createJob (target, data) {
    await Q.lpush(target, JSON.stringify(data))
  },
  async submitCheckCodeTask (submitId) {
    await Queue.createJob('JUDGER', {
      event: 'JUDGE_SUBMISSION',
      payload: {
        submissionId: submitId
      }
    })
  }
}

export default Queue
