const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index')
const doc = require('./_doc').group('讨论').basePath('/discussions')

const DiscussionModel = require('../../models/discussion')

let discussion

describe('Route: Discussion', function () {
  before(async function () {
    [discussion] = await DiscussionModel[Symbol.for('create')]({})
  })

  after(async function () {
    await discussion.destroy()
  })

  doc.action('获取讨论').is(doc => {
    it('获取讨论', async function () {
      const res = await request(app).with(doc)
        .get('/api/v1/discussions')
        .query({
          limit: doc.val(1, '限制查询数量')
        })
        .expect(200)
      res.body.data.should.be.an.instanceOf(Array)
      res.body.data[0].should.have.properties('userId', 'problemId')
    })
  })
})
