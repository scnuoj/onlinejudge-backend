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

let extraUserId: string

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
  await userRepository.removeById(extraUserId)
})

it('', async () => {
  const res = await request(app)
    .get('/v1/user')
    .set('Authorization', `Bearer ${token}`)
    .expect(200)
  assert.equal(res.body.data.id, user.id)
})

it('', async () => {
  const res = await request(app)
    .post('/v1/user/register')
    .send({
      name: '测试注册用户',
      email: 'test@test2.com',
      password: '123456789'
    })
    .expect(200)
  extraUserId = res.body.data.id
  assert.equal(res.body.data.name, '测试注册用户')
  assert.notProperty(res.body.data, 'password')
})

it('', async () => {
  const res = await request(app)
    .post('/v1/user/login')
    .send({
      nameOrEmail: '测试名',
      password: '111111111'
    })
    .expect(200)
  assert.property(res.body.data, 'token')
  assert.equal(res.body.data.name, '测试名')
  assert.notProperty(res.body.data, 'password')
})

it('', async () => {
  const res = await request(app)
    .post('/v1/user/forget')
    .send({
      email: 'test@test.com'
    })
  .expect(200)
})

it('', async () => {
  const res = await request(app)
    .patch('/v1/user/password')
    .set('Authorization', `Bearer ${token}`)
    .send({
      password: '111111111',
      newPassword: '222222222'
    })
    .expect(200)
  user = await userRepository.findOneById(user.id)
  assert.equal(user.password, SHA256('222222222'))
})
