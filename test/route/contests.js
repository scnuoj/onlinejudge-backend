const request = require('supertest-test2doc')(require('supertest'))
const doc = require('./_doc').group('比赛').basePath('/contests')

let contest

describe('route/problem', function () {
  before(async function () {
    [contest] = await Database.Contest.mock({})
  })

  after(async function () {
    await contest.destroy()
  })

  doc.action('获取最近的比赛').is(doc => {
    it('获取最近的比赛', async function () {
      const res = await request(app).with(doc)
        .get('/v1/contests')
        .query({
          limit: doc.val(1, '限制查询数量')
        })
        .expect(200)
      assert.property(res.body.data[0], 'title')
    })
  })
})
