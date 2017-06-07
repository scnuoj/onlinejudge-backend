import './mock.d'
import { Random } from 'mockjs'
import sequelize from '../library/database'
import { User } from '../model/user'
import { Problem } from '../model/problem'
import { Submission } from '../model/submission'

sequelize.sync({
  force: true
}).then(async () => {
  const times = Array(5).fill({})

  let users = [], problems = [], submissions = []

  users = await Promise.all(times.map(time => {
    const user = new User({
      avatar: Random.string(),
      email: Random.email(),
      gender: Random.integer(0, 2000),
      name: Random.string(),
      password: Random.string(),
      remark: Random.string(),
      school: Random.string()
    })
    return user.save()
  }))

  for (const user of users) {
    const problem = new Problem({
      description: Random.paragraph(),
      title: Random.string(),
      lang: Random.string(),
      input: Random.string(),
      output: Random.string(),
      percent: Random.float(),
      sampleInput: Random.string(),
      sampleOutput: Random.string(),
      submitCount: Random.integer(100, 200),
      passCount: Random.integer(10, 20),
      maxCpuTime: Random.integer(1000, 2000),
      maxRealTime: Random.integer(1000, 2000),
      maxMemory: Random.integer(1000, 2000),
      maxProcessNumber: Random.integer(1000, 2000),
      maxOutputSize: Random.integer(1000, 2000),
      inputData: Random.string(),
      outputData: Random.string(),
      userId: user.id
    })
    await problem.save()
    problems.push(problem)
  }
    
  submissions = await Promise.all(problems.map(problem => Promise.all(users.map(user => {
    const submission = new Submission({
      code: Random.paragraph(),
      cpuTime: Random.integer(0, 2000),
      error: Random.integer(0, 2000),
      exitCode: Random.integer(0, 2000),
      lang: 'C',
      memory: Random.integer(0, 2000),
      problemId: problem.id,
      realTime: Random.integer(0, 2000),
      result: Random.integer(0, 2000),
      signal: Random.integer(0, 2000),
      userId: user.id
    })
    return submission.save()
  }))))
})
  