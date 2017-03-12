require('should')
const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index.js')
const doc = require('test2doc').group('一道问题').basePath('/problem')

const ProblemModel = require('../../models/problem')
const UserModel = require('../../models/user')

let problem, user

describe('一个问题', function () {
  before(async function () {
    [user] = await UserModel[Symbol.for('create')]({});
    [problem] = await ProblemModel[Symbol.for('create')]({
      userId: user.id
    })
  })

  after(async function () {
    await problem.destroy()
    await user.destroy()
  })

  doc.action('获取一道问题').is(doc => {
    it('获取一道问题', async function () {
      let res = await request(app).with(doc)
        .get(`/api/problem/${problem.id}`)
        .expect(200)
      res = doc.resBody(res.body)
      res.data.should.have.properties('title')
    })
  })
})
