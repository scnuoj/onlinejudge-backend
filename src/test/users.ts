import { assert } from 'chai'
import * as config from 'config'
import * as jwt from 'jsonwebtoken'
import { suite, test } from 'mocha-typescript'
import * as request from 'supertest'
import connection from '..'
import { User } from '../model/user'

const jwtConfig = config.get('Jwt') as any

let user: User
let token: string
let app

@suite class Users {
  static async before () {
    app = await connection
    user = await User.create<User>(User.mock())
    token = jwt.sign({
      id: user.id
    } as {}, jwtConfig.secret)
  }

  static async after () {
    await user.destroy()
  }

  @test async index () {
    const res = await request(app)
      .get('/v1/users')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
    assert.equal(res.body.data.id,user.id)
  }

  @test async register () {
    const res = await request(app)
    .post('/v1/users')
    .expect(200)
    assert.isTrue(res.body.success)
    assert.isString(res.body.token)
    assert.equal(res.body.message, '注册成功')
    user = res.body.User
  }
}
