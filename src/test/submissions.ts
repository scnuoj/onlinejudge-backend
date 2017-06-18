import { connection } from 'app/index'
import { Problem } from 'app/model/Problem'
import { Submission } from 'app/model/Submission'
import { User } from 'app/model/User'
import { IJwtConfig } from 'app/typing/config'
import { assert } from 'chai'
import * as config from 'config'
import * as jwt from 'jsonwebtoken'
import { suite, test } from 'mocha-typescript'
import * as request from 'supertest'

const jwtConfig = <IJwtConfig>config.get('Jwt')

let problem: Problem
let user: User
let token: string
let submissionId: number
let app

@suite class Problems {
  static async before (): Promise<void> {
    app = await connection
    user = await User.create<User>(User.MOCK_DATA())
    problem = await Problem.create<Problem>(Problem.MOCK_DATA({ userId: user.id }))
    token = jwt.sign(<object>{
      id: user.id
    }, jwtConfig.secret)
  }

  static async after (): Promise<void> {
    await Submission.destroy({
      where: {
        id: submissionId
      }
    })
    await problem.destroy()
    await user.destroy()
  }

  @test async index (): Promise<void> {
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

  @test async index2 (): Promise<void> {
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
