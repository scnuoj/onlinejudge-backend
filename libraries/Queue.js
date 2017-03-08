const Redis = require('ioredis')
const queueConfig = require('config').get('Queue')

const Q = new Redis(queueConfig.port, queueConfig.host, {
  password: queueConfig.auth,
  db: queueConfig.db
})

Q.on('connect', () => console.log('消息队列连接成功'))
Q.on('disconnect', () => console.log('消息队列连接失败'))
Q.on('error', () => console.log('消息队列连接出错'))

const queue = {
  createJob: async function (target, data) {
    await Q.lpush(target, JSON.stringify(data))
  },
  submitTask: async function (submitId) {
    await queue.createJob('JUDGER', {
      event: 'JUDGE_SUBMISSION',
      payload: submitId
    })
  }
}

module.exports = queue
