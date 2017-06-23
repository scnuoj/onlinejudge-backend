import { connection, createConnection } from 'app'
import { Problem, User } from 'app/entity'
import { ProblemRepository, UserRepository } from 'app/repository'
import { assert } from 'chai'
import 'mocha'
import * as request from 'supertest'
import { Connection } from 'typeorm'

let app: {}
let db: Connection
let user: User
let problem: Problem
let userRepository: UserRepository
let problemRepository: ProblemRepository

before('', async () => {
  db = await createConnection
  app = await connection
  userRepository = db.getCustomRepository(UserRepository)
  problemRepository = db.getCustomRepository(ProblemRepository)

  user = await userRepository.fake()
  problem = await problemRepository.fake()
})

after(async () => {
  await problemRepository.remove(problem)
  await userRepository.remove(user)
})

it('', async () => {
  const res = await request(app)
    .get('/v1/problems')
    .query({
      limit: 1,
      offset: 0,
      sortby: 'title',
      order: 'desc'
    })
    .expect(200)
  assert.isNumber(res.body.data.count)
  assert.isArray(res.body.data.rows)
  assert.lengthOf(res.body.data.rows, 1)
})

it('', async () => {
  const res = await request(app)
    .get(`/v1/problems/${problem.id}`)
    .expect(200)
  assert.equal(res.body.data.id, problem.id)
})
