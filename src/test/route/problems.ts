import { connection, createConnection } from 'app'
import { Problem, User } from 'app/entity'
import { ProblemRepository, UserRepository } from 'app/repository'
import { assert } from 'chai'
import 'mocha'
import * as request from 'supertest'
import { Connection } from 'typeorm'

describe('ProblemController', () => {
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
    problem = await problemRepository.fake({ user })
  })

  after(async () => {
    await problemRepository.remove(problem)
    await userRepository.remove(user)
  })

  it('GET /v1/problems', async () => {
    const res = await request(app)
      .get('/v1/problems')
      .query({
        limit: 1,
        offset: 0,
        sortby: 'title',
        order: 'DESC'
      })
      .expect(200)
    assert.isNumber(res.body.data[1])
    assert.isArray(res.body.data[0])
    assert.lengthOf(res.body.data[0], 1)
  })

  it('GET /v1/problems/{id}', async () => {
    const res = await request(app)
      .get(`/v1/problems/${problem.id}`)
      .expect(200)
    assert.equal(res.body.data.id, problem.id)
  })

  it('GET /v1/problems/:id/recommend', async () => {
    await request(app)
      .get(`/v1/problems/:id/recommend`)
      .expect(200)
  })

})
