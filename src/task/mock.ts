import { database } from 'app/library/database'
import { Problem } from 'app/model/Problem'
import { Submission } from 'app/model/Submission'
import { User } from 'app/model/User'
import { Random } from 'mockjs'
import * as process from 'process'

database.sync({
  force: true
}).then(async () => {
  const times = Array(5).fill({})

  const users = await Promise.all<User>(times.map((time: null) => User.create<User>(User.MOCK_DATA())))

  const problems = await Promise.all<Problem>(users.map((user: User) => Problem.create<Problem>(Problem.MOCK_DATA({ userId: user.id }))))

  const submissions = await Promise.all(problems.map((problem: Problem) =>
    Promise.all<Submission>(users.map((user: User) =>
      Submission.create(Submission.MOCK_DATA({
        userId: user.id,
        problemId: problem.id
      }))))
    )
  )
  process.exit()
})
