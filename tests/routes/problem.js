require('should')
const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index.js')
const doc = require('test2doc').group('问题').basePath('/problem')

const ProblemModel = require('../../models/problem')
const UserModel = require('../../models/user')

let problem, user

describe('问题', function () {
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
      res.body.data.id.should.equal(problem.id)
    })
  })

  doc.action('获取全部问题').is(doc => {
    it('获取全部问题', async function () {
      let res = await request(app).with(doc)
        .get('/api/problem')
        .query({
          limit: doc.val(1, '限制查询数量'),
          offset: doc.val(0, '查询偏移'),
          sortby: doc.val('createdAt', '排序依据, 默认为 createdAt, 可选 updatedAt, id'),
          order: doc.val('desc', '排序顺序, 默认为 desc, 可选 asc')
        })
        .expect(200)
      res.body.data.should.be.an.instanceOf(Array)
      res.body.data[0].should.have.properties('title')
    })
  })
})
