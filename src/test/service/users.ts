import { createConnection } from 'app'
import { Problem, User } from 'app/entity'
import { ProblemRepository, SubmissionRepository, UserRepository } from 'app/repository'
import * as config from 'config'
import { SHA256 } from 'crypto-js'
import * as jwt from 'jsonwebtoken'
import { Connection } from 'typeorm'
import { UserService } from 'app/service'
import { Container } from 'typedi'

const jwtConfig = config.jwt

describe.skip('UserService', () => {
  let db: Connection
  let user: User
  let problem: Problem
  let userRepository: UserRepository
  let problemRepository: ProblemRepository
  let submissionRepository: SubmissionRepository
  let userService: UserService
  let token: string

  let extraUserId: string

  before('', async () => {
    db = await createConnection
    userRepository = db.getCustomRepository(UserRepository)
    problemRepository = db.getCustomRepository(ProblemRepository)
    submissionRepository = db.getCustomRepository(SubmissionRepository)
    userService = Container.get(UserService)

    user = await userRepository.fake({ password: SHA256('123456789').toString() })
    problem = await problemRepository.fake({ user })

    token = jwt.sign({ id: user.id }, jwtConfig.secret)
  })

  after(async () => {
    await problemRepository.remove(problem)
    await userRepository.remove(user)
    await userRepository.removeById(extraUserId)
  })

})
