import { assert } from 'chai'
import { suite, test } from 'mocha-typescript'
import { connection } from 'app/index'
import { Problem } from 'app/model/Problem'
import { User } from 'app/model/User'
import * as request from 'supertest'

let problem: Problem
let user: User
let app

@suite class Problems {
  public async before (): Promise<void> {
    app = await connection
    user = await User.create<User>(User.MOCK_DATA())
    problem = await Problem.create<Problem>(Problem.MOCK_DATA({ userId: user.id }))
  }

  public async after (): Promise<void> {
    await problem.destroy()
    await user.destroy()
  }

  @test public async index (): Promise<void> {
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

  @test public async show (): Promise<void> {
    const res = await request(app)
      .get(`/v1/problems/${problem.id}`)
      .expect(200)
    assert.equal(res.body.data.id, problem.id)
  }
}
