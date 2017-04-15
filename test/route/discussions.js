const request = require('supertest')

let discussion

describe('route/discussions', () => {
  before(async () => {
    [discussion] = await Database.Discussion.mock({})
  })

  after(async () => {
    await discussion.destroy()
  })

  it('获取讨论', async () => {
    const res = await request(app)
      .get('/v1/discussions')
      .query({
        limit: 1
      })
      .expect(200)
    assert.isArray(res.body.data)
    assert.property(res.body.data[0], 'userId')
  })
})
