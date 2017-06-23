import { connection, createConnection } from 'app'
import { Problem, User } from 'app/entity'
import { ProblemRepository, SubmissionRepository, UserRepository } from 'app/repository'
import { IJwtConfig } from 'app/typing/config'
import { assert } from 'chai'
import * as config from 'config'
import * as jwt from 'jsonwebtoken'
import 'mocha'
import * as request from 'supertest'
import { Connection } from 'typeorm'

const jwtConfig = <IJwtConfig>config.get('Jwt')

let app: {}
let db: Connection
let user: User
let problem: Problem
let userRepository: UserRepository
let problemRepository: ProblemRepository
let submissionRepository: SubmissionRepository
let token: string

let submissionId: string

before('', async () => {
  db = await createConnection
  app = await connection
  userRepository = db.getCustomRepository(UserRepository)
  problemRepository = db.getCustomRepository(ProblemRepository)
  submissionRepository = db.getCustomRepository(SubmissionRepository)

  user = await userRepository.fake()
  problem = await problemRepository.fake()

  token = jwt.sign({ id: user.id }, jwtConfig.secret)
})

after(async () => {
  await problemRepository.remove(problem)
  await userRepository.remove(user)
  await submissionRepository.removeById(submissionId)
})

it('', async () => {
  const res = await request(app)
    .post('/v1/submissions')
    .set('Authorization', `Bearer ${token}`)
    .send({
      id: problem.id,
      code: 'testcode',
      lang: 'c'
    })
    .expect(200)
  assert.isTrue(res.body.success)
  assert.equal(res.body.message, '提交成功, 结果出来后系统会通知你')
  submissionId = res.body.data
})

it('', async () => {
  const res = await request(app)
    .post('/v1/submissions')
    .send({
      id: problem.id,
      code: 'testcode',
      lang: 'c'
    })
    .expect(401)
  assert.isFalse(res.body.success)
})
