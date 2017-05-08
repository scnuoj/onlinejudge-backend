import request from 'supertest'

let contest

describe('route/contests', () => {
  before(async () => {
    [contest] = await Database.Contest.mock({})
  })

  after(async () => {
    await contest.destroy()
  })

  it('获取最近的比赛', async () => {
    const res = await request(app)
      .get('/v1/contests')
      .query({
        limit: 1
      })
      .expect(200)
    assert.property(res.body.data[0], 'title')
  })
})
