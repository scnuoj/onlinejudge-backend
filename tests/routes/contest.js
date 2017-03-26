require('should')
const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index.js')
const doc = require('test2doc').group('比赛').basePath('/contests')

const ContestModel = require('../../models/contest')

let contest

describe('Route: Problem', function () {
  before(async function () {
    [contest] = await ContestModel[Symbol.for('create')]({
      title: '123456'
    })
  })

  after(async function () {
    await contest.destroy()
  })

  doc.action('获取最近的比赛').is(doc => {
    it('获取最近的比赛', async function () {
      const res = await request(app).with(doc)
        .get('/api/v1/contests')
        .query({
          limit: doc.val(1, '限制查询数量')
        })
        .expect(200)
      res.body.data.should.be.an.instanceOf(Array)
      res.body.data[0].should.have.properties('title', 'id')
      res.body.data[0].title.should.equal('123456')
    })
  })
})
