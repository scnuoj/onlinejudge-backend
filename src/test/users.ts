import { connection } from 'app'
import { User } from 'app/model/User'
import { IJwtConfig } from 'app/typing/config'
import { assert } from 'chai'
import * as config from 'config'
import { SHA256 } from 'crypto-js'
import * as jwt from 'jsonwebtoken'
import { suite, test } from 'mocha-typescript'
import * as request from 'supertest'

const jwtConfig = <IJwtConfig>config.get('Jwt')

let user: User
let token: string
let app
let extraUserId

@suite class Users {
  static async before (): Promise<void> {
    app = await connection
    user = await User.create<User>(User.MOCK_DATA({
      name: '测试名',
      email: 'test@test.com',
      password: SHA256('111111111').toString()
    }))
    token = jwt.sign(<object>{
      id: user.id
    }, jwtConfig.secret)
  }

  static async after (): Promise<void> {
    await user.destroy()
    await User.destroy({
      where: {
        id: extraUserId
      }
    })
  }

  @test async index (): Promise<void> {
    const res = await request(app)
      .get('/v1/user')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
    assert.equal(res.body.data.id, user.id)
  }

  @test async register (): Promise<void> {
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

  @test async login (): Promise<void> {
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

  @test async forget (): Promise<void> {
    const res = await request(app)
      .post('/v1/user/forget')
      .send({
        email: 'test@test.com'
      })
      .expect(200)
  }

  @test async password (): Promise<void> {
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
