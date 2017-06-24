import { createConnection } from 'app'
import { ProblemRepository, UserRepository, SubmissionRepository } from 'app/repository'
import * as process from 'process'

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
  await Promise.all(users.map(user => Promise.all(problems.map(problem => submissionRepository.fake({ user, problem })))))

}).then(() => {
  process.exit()
}).catch(e => console.log(e))
