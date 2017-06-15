import { assert } from 'chai'
import * as config from 'config'
import { SHA256 } from 'crypto-js'
import * as jwt from 'jsonwebtoken'
import { suite, test } from 'mocha-typescript'
import * as request from 'supertest'
import connection from '..'
import { User } from '../model/user'

const jwtConfig = config.get('Jwt') as any

let user: User
let token: string
let app
let extraUserId

@suite class Users {
  static async before () {
    app = await connection
    user = await User.create<User>(User.mock({
      name: '测试名',
      email: 'test@test.com',
      password: SHA256('111111111').toString()
    }))
    token = jwt.sign({
      id: user.id
    } as {}, jwtConfig.secret)
  }

  static async after () {
    await user.destroy()
    await User.destroy({
      where: {
        id: extraUserId
      }
    })
  }

  @test async index () {
    const res = await request(app)
      .get('/v1/user')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
    assert.equal(res.body.data.id, user.id)
  }

  @test async register () {
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
  }

  @test async login () {
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
  }

  @test async forget () {
    const res = await request(app)
      .post('/v1/user/forget')
      .send({
        email: 'test@test.com'
      })
      .expect(200)
  }

  @test async password () {
    const res = await request(app)
      .patch('/v1/user/password')
      .set('Authorization', `Bearer ${token}`)
      .send({
        password: '111111111',
        newPassword: '222222222'
      })
      .expect(200)
    await user.reload()
    assert.equal(user.password, SHA256('222222222').toString())
  }
}
