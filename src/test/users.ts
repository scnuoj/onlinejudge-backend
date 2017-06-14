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
  }

  @test async index () {
    const res = await request(app)
      .get('/v1/users')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
    assert.equal(res.body.data.id, user.id)
  }

  @test async register () {
    const res = await request(app)
      .post('/v1/users/register')
      .send({
        name: '测试注册用户',
        email: 'test@test2.com',
        password: '123456789'
      })
      .expect(200)
    assert.equal(res.body.data.name, '测试注册用户')
    await User.destroy({
      where: {
        id: res.body.data.id
      }
    })
  }

  @test async login () {
    const res = await request(app)
      .post('/v1/users/login')
      .send({
        nameOrEmail: '测试名',
        password: '111111111'
      })
      .expect(200)
    assert.property(res.body.data, 'token')
    assert.equal(res.body.data.name, '测试名')
  }

  @test async forget () {
    const res = await request(app)
      .post('/v1/users/forget')
      .send({
        email: 'test@test.com'
      })
      .expect(200)
    assert.isTrue(res.body.success)
    assert.equal(res.body.message, '系统已经向您的邮箱发送了验证邮件, 请查收')
  }

  @test async password () {
    const res = await request(app)
      .patch('/v1/users/password')
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
