import * as config from 'config'
import * as Redis from 'ioredis'
import { ICacheConfig } from 'app/dts/config'

const queueConfig = <ICacheConfig>config.get('Cache')

const Q = new Redis(queueConfig.port, queueConfig.host, {
  password: queueConfig.password,
  db: queueConfig.db
})

Q.on('connect', () => console.log('消息队列连接成功'))
Q.on('disconnect', () => console.log('消息队列连接失败'))
Q.on('error', () => console.log('消息队列连接出错'))

export const queue = {
  async createJob (target: string, data: object): Promise<void> {
    await Q.lpush(target, JSON.stringify(data))
  },
  async submitCheckCodeTask (submitId: number): Promise<void> {
    await queue.createJob('JUDGER', {
      event: 'JUDGE_SUBMISSION',
      payload: {
        submissionId: submitId
      }
    })
  }
}
