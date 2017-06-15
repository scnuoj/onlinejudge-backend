import { assert } from 'chai'
import * as config from 'config'
import * as jwt from 'jsonwebtoken'
import { suite, test } from 'mocha-typescript'
import * as request from 'supertest'
import connection from '..'
import { Problem } from '../model/problem'
import { Submission } from '../model/submission'
import { User } from '../model/user'

const jwtConfig = config.get('Jwt') as any

let problem: Problem
let user: User
let token: string
let submissionId: number
let app

@suite class Problems {
  static async before () {
    app = await connection
    user = await User.create<User>(User.mock())
    problem = await Problem.create<Problem>(Problem.mock({ userId: user.id }))
    token = jwt.sign({
      id: user.id
    } as {}, jwtConfig.secret)
  }

  static async after () {
    await Submission.destroy({
      where: {
        id: submissionId
      }
    })
    await problem.destroy()
    await user.destroy()
  }

  @test async index () {
    const res = await request(app)
      .post('/v1/submissions')
      .set('Authorization', `Bearer ${token}`)
      .send({
        id: problem.id,
        code: 'testcode',
        lang: 'c'
      })
      .expect(200)
    assert.isTrue(res.body.success)
    assert.equal(res.body.message, '提交成功, 结果出来后系统会通知你')
    submissionId = res.body.data
  }

  @test async index2 () {
    const res = await request(app)
      .post('/v1/submissions')
      .send({
        id: problem.id,
        code: 'testcode',
        lang: 'c'
      })
      .expect(401)
    assert.isFalse(res.body.success)
  }
}
