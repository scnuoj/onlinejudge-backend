import { Random } from 'mockjs'
import * as process from 'process'
import sequelize from '../library/database'
import { Problem } from '../model/problem'
import { Submission } from '../model/submission'
import { User } from '../model/user'

sequelize.sync({
  force: true
}).then(async () => {
  const times = Array(5).fill({})

  const users = await Promise.all<User>(times.map(time => User.create<User>(User.mock())))

  const problems = await Promise.all<Problem>(users.map(user => Problem.create<Problem>(Problem.mock({ userId: user.id }))))

  const submissions = await Promise.all(problems.map(problem => Promise.all<Submission>(users.map(user => Submission.create(Submission.mock({
    userId: user.id,
    problemId: problem.id
  }))))))
  process.exit()
})
