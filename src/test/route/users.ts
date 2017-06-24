import { connection, createConnection } from 'app'
import { Problem, User } from 'app/entity'
import { ProblemRepository, SubmissionRepository, UserRepository } from 'app/repository'
import { IJwtConfig } from 'app/typing/config'
import { assert } from 'chai'
import * as config from 'config'
import { SHA256 } from 'crypto-js'
import * as jwt from 'jsonwebtoken'
import 'mocha'
import * as request from 'supertest'
import * as faker from 'faker'
import { Connection } from 'typeorm'

const jwtConfig = config.get('Jwt') as IJwtConfig

describe('UserController', () => {
  let app: {}
  let db: Connection
  let user: User
  let problem: Problem
  let userRepository: UserRepository
  let problemRepository: ProblemRepository
  let submissionRepository: SubmissionRepository
  let token: string

  let extraUserId: string

  let name = faker.name.firstName()
  let email = faker.internet.email()
  let password = faker.internet.password()

  before('', async () => {
    db = await createConnection
    app = await connection
    userRepository = db.getCustomRepository(UserRepository)
    problemRepository = db.getCustomRepository(ProblemRepository)
    submissionRepository = db.getCustomRepository(SubmissionRepository)

    user = await userRepository.fake({ password: SHA256('123456789').toString() })
    problem = await problemRepository.fake({ user })

    token = jwt.sign({ id: user.id }, jwtConfig.secret)
  })

  after(async () => {
    await problemRepository.remove(problem)
    await userRepository.remove(user)
    await userRepository.removeById(extraUserId)
  })

  it('GET /v1/user', async () => {
    const res = await request(app)
      .get('/v1/user')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
    assert.equal(res.body.data.id, user.id)
  })

  it('POST /v1/user/register', async () => {
    const res = await request(app)
      .post('/v1/user/register')
      .send({
        name,
        email,
        password
      })
      .expect(200)
    extraUserId = res.body.data.user.id
    assert.equal(res.body.data.user.name, name)
    assert.notProperty(res.body.data.user, 'password')
  })

  it('POST /v1/user/login', async () => {
    const res = await request(app)
      .post('/v1/user/login')
      .send({
        nameOrEmail: name,
        password: password
      })
      .expect(200)
    assert.property(res.body.data, 'token')
    assert.equal(res.body.data.user.name, name)
    assert.notProperty(res.body.data.user, 'password')

    const res2 = await request(app)
      .post('/v1/user/login')
      .send({
        nameOrEmail: email,
        password: password
      })
      .expect(200)
    assert.property(res.body.data, 'token')
    assert.equal(res.body.data.user.name, name)
    assert.notProperty(res.body.data.user, 'password')
  })

  it('POST /v1/user/forget', async () => {
    await request(app)
      .post('/v1/user/forget')
      .send({
        email
      })
    .expect(200)
  })

  it('PATCH /v1/user/password', async () => {
    const newPassword = faker.internet.password()
    await request(app)
      .patch('/v1/user/password')
      .set('Authorization', `Bearer ${token}`)
      .send({
        password: '123456789',
        newPassword: newPassword
      })
      .expect(200)
    const result = await userRepository.findOneById(user.id)
    assert.equal((result as User).password, SHA256(newPassword).toString())
  })

})
