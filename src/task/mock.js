import { SHA256 } from 'crypto-js'
import Queue from '../library/queue'
import app from '../index.js'

const inputData = '1 2'
const outputData = '3'
const code = `
#include<iostream>
using namespace std;
int main() {
  int a, b
  cin >> a >> b
  return a+b
}`

describe('Mock 数据', function () {
  before(async function () {
    await app.listen()
    await Database.sync({ force: true })
  })
  it('Mock Data', async function () {
    // 创建两个用户
    const users = await Database.User.mock({
      name: 'test',
      password: SHA256('testtest').toString()
    }, {})
    let problems = []
    // 每个用户创建 6 条 Problem 表的 Mock 数据
    for (let i = 0; i < 10; i++) {
      problems = await Promise.all(users.map(user => Database.Problem.mock(
        { userId: user.id, inputData, outputData }, { userId: user.id, inputData, outputData },
        { userId: user.id, inputData, outputData }, { userId: user.id, inputData, outputData },
        { userId: user.id, inputData, outputData }, { userId: user.id, inputData, outputData }
      )))
    }
    // 创建一个正确的 submission
    const [submission] = await Database.Submission.mock({
      problemId: problems[0][0].id,
      userId: users[0].id,
      code
    })
    // 同时往消息队列插入该 submission
    await Queue.submitCheckCodeTask(submission.id)
  })
})
