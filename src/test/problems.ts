import { assert } from 'chai'
import { suite, test } from 'mocha-typescript'
import * as request from 'supertest'
import connection from '..'
import { Problem } from '../model/problem'
import { User } from '../model/user'

let problem: Problem
let user: User
let app

@suite class Problems {
  async before () {
    app = await connection
    user = await User.create<User>(User.mock())
    problem = await Problem.create<Problem>(Problem.mock({ userId: user.id }))
  }

  async after () {
    await problem.destroy()
    await user.destroy()
  }

  @test async index () {
    const res = await request(app)
      .get('/v1/problems')
      .query({
        limit: 1,
        offset: 0,
        sortby: 'id',
        order: 'desc'
      })
      .expect(200)
    assert.isNumber(res.body.data.count)
    assert.isArray(res.body.data.rows)
    assert.lengthOf(res.body.data.rows, 1)
  }

  @test async show () {
    const res = await request(app)
      .get(`/v1/problems/${problem.id}`)
      .expect(200)
    assert.equal(res.body.data.id, problem.id)
  }
}
