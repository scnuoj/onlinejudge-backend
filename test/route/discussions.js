const request = require('supertest-test2doc')(require('supertest'))
const doc = require('./_doc').group('讨论').basePath('/discussions')

let discussion

describe('route/discussion', function () {
  before(async function () {
    [discussion] = await Database.Discussion.mock({})
  })

  after(async function () {
    await discussion.destroy()
  })

  doc.action('获取讨论').is(doc => {
    it('获取讨论', async function () {
      const res = await request(app).with(doc)
        .get('/v1/discussions')
        .query({
          limit: doc.val(1, '限制查询数量')
        })
        .expect(200)
      assert.isArray(res.body.data)
      assert.property(res.body.data[0], 'userId')
    })
  })
})
