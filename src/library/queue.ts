import { Submission } from 'app/entity/Submission'
import { ICacheConfig } from 'app/typing/config'
import * as config from 'config'
import * as Redis from 'ioredis'

const queueConfig = <ICacheConfig>config.get('Cache')

const comsumer = new Redis(queueConfig.port, queueConfig.host, {
  password: queueConfig.password,
  db: queueConfig.db
})

const producer = new Redis(queueConfig.port, queueConfig.host, {
  password: queueConfig.password,
  db: queueConfig.db
})

comsumer.on('connect', () => console.log('消息队列1连接成功'))
comsumer.on('disconnect', () => console.log('消息队列1连接失败'))
comsumer.on('error', () => console.log('消息队列1连接出错'))
producer.on('connect', () => console.log('消息队列2连接成功'))
producer.on('disconnect', () => console.log('消息队列2连接失败'))
producer.on('error', () => console.log('消息队列2连接出错'))

export const queue = {
  async submitCheckCodeTask (submissionId: number): Promise<void> {
    await producer.lpush('JUDGER', submissionId)
  }
}

Promise.resolve().then(async () => {
  for ( ; ; ) {
    const message = await comsumer.brpop(['JUDGER_FINISH'], 0)
    const payload: IJudgerPayload = JSON.parse(message[1])
    // await Submission.update({
    //   realTime: payload.real_time,
    //   error: payload.error,
    //   exitCode: payload.exit_code,
    //   cpuTime: payload.cpu_time,
    //   result: payload.result,
    //   signal: payload.signal,
    //   memory: payload.memory
    // }, {
    //   where: {
    //     id: payload.submissionId
    //   }
    // })
    console.log(payload)
  }
})

export interface IJudgerPayload {
  real_time: number
  error: number
  exit_code: number
  cpu_time: number
  result: number
  signal: number
  memory: number
  submissionId: string
}
