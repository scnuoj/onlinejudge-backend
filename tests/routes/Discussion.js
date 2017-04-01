const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index')
const doc = require('./_doc').group('讨论').basePath('/Discussions')

const DiscussionModel = require('../../models/Discussion')

let Discussion

describe('Route: Discussion', function () {
  before(async function () {
    [Discussion] = await DiscussionModel[Symbol.for('create')]({})
  })

  after(async function () {
    await Discussion.destroy()
  })

  doc.action('获取讨论').is(doc => {
    it('获取讨论', async function () {
      const res = await request(app).with(doc)
        .get('/api/v1/Discussions')
        .query({
          limit: doc.val(1, '限制查询数量')
        })
        .expect(200)
      res.body.data.should.be.an.instanceOf(Array)
      res.body.data[0].should.have.properties('userId', 'problemId')
    })
  })
})
