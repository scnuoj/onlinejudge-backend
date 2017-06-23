import { createConnection } from 'app'
import { Problem, Submission, User } from 'app/entity'
import { ProblemRepository } from 'app/repository/ProblemRepository'
import { SubmissionRepository } from 'app/repository/SubmissionRepository'
import { UserRepository } from 'app/repository/UserRepository'
import { autobind } from 'core-decorators'
import * as process from 'process'
import { Service } from 'typedi'
import { OrmCustomRepository } from 'typeorm-typedi-extensions'

createConnection.then(async connection => {
  const userRepository: UserRepository = connection.getCustomRepository(UserRepository)
  const problemRepository: ProblemRepository = connection.getCustomRepository(ProblemRepository)
  const submissionRepository: SubmissionRepository = connection.getCustomRepository(SubmissionRepository)
  const users = await Promise.all([
    userRepository.fake(),
    userRepository.fake(),
    userRepository.fake()
  ])
  const problems = await Promise.all(users.map(user => problemRepository.fake({ user: user })))
  process.exit()
})
