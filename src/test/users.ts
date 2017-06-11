import { assert } from 'chai'
import { suite, test } from 'mocha-typescript'
import * as request from 'supertest'
import connection from '..'
import { User } from '../model/user'

let user: User
let app

@suite class Users {
  static async before () {
    app = await connection
    user = await User.create<User>(User.mock())
  }

  static async after () {
    await user.destroy()
  }

  @test async index () {
    const res = await request(app)
      .get(`/v1/problems/${user.id}`)
      .expect(200)
    assert.equal(res.body.data.id, user.id)
  }

}
