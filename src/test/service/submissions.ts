import { createConnection } from 'app'
import { ProblemRepository, SubmissionRepository, UserRepository } from 'app/repository'
import { Problem, User } from 'app/entity'
import { Connection } from 'typeorm'
import { Container } from 'typedi'
import { ProblemService } from 'app/service'
import { SubmissionService } from 'app/service'

describe.skip('SubmissionService', () => {
  let db: Connection
  let user: User
  let problem: Problem
  let userRepository: UserRepository
  let problemRepository: ProblemRepository
  let submissionRepository: SubmissionRepository
  let problemService: ProblemService
  let submissionService: SubmissionService

  let submissionId: string

  before('', async () => {
    db = await createConnection
    userRepository = db.getCustomRepository(UserRepository)
    problemRepository = db.getCustomRepository(ProblemRepository)
    submissionRepository = db.getCustomRepository(SubmissionRepository)
    problemService = Container.get(ProblemService)
    submissionService = Container.get(SubmissionService)

    user = await userRepository.fake()
    problem = await problemRepository.fake({ user })

  })

  after('', async () => {
    await submissionRepository.removeById(submissionId)
    await problemRepository.removeById(problem.id)
    await userRepository.removeById(user.id)
  })
})
