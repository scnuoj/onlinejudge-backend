import 'mocha'
import { connection, createConnection } from 'app'
import { Problem, User } from 'app/entity'
import { ProblemRepository, SubmissionRepository, UserRepository } from 'app/repository'
import { assert } from 'chai'
import * as config from 'config'
import * as jwt from 'jsonwebtoken'
import * as request from 'supertest'
import { Connection } from 'typeorm'

const jwtConfig = config.jwt

describe('SubmissionsController', () => {

  let app: {}
  let db: Connection
  let user: User
  let problem: Problem
  let userRepository: UserRepository
  let problemRepository: ProblemRepository
  let submissionRepository: SubmissionRepository
  let token: string

  let submissionId: string
  let submission: string
  let submissions: string

  before('', async () => {
    db = await createConnection
    app = await connection
    userRepository = db.getCustomRepository(UserRepository)
    problemRepository = db.getCustomRepository(ProblemRepository)
    submissionRepository = db.getCustomRepository(SubmissionRepository)

    user = await userRepository.fake()
    problem = await problemRepository.fake({ user })

    token = jwt.sign({ id: user.id }, jwtConfig.secret)
  })

  after('', async () => {
    await submissionRepository.removeById(submissionId)
    await problemRepository.removeById(problem.id)
    await userRepository.removeById(user.id)
  })

  it('POST /v1/submissions', async () => {
    const res = await request(app)
      .post('/v1/submissions')
      .set('Authorization', `Bearer ${token}`)
      .send({
        id: problem.id,
        code: 'testcode',
        lang: 'c'
      })
      .expect(200)
    assert.equal(res.body.message, '提交成功, 结果出来后系统会通知你')
    submissionId = res.body.data
  })

  it('POST /v1/submissions', async () => {
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

  it('GET /v1/submissions', async () => {
    const res = await request(app)
      .get('/v1/submissions')
      .set('Authorization', `Bearer ${token}`)
      .query({
        limit: 10,
        offset: 10,
        problemId: 10
      })
      .expect(200)
    submissions = res.body.data
  })

  it('GET /v1/submissions{submissionId}', async () => {
    const res = await request(app)
      .get(`/v1/submissions/${submissionId}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
    submission = res.body.data
  })
})
