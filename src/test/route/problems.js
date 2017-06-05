import request from 'supertest'

let problem

describe('route/problems', () => {
  before(async () => {
    [problem] = await Database.Problem.mock({
      userId: user.id
    })
  })

  after(async () => {
    await problem.destroy()
  })

  it('获取一道问题', async () => {
    const res = await request(app)
      .get(`/v1/problems/${problem.id}`)
      .expect(200)
    assert.equal(res.body.data.id, problem.id)
  })

  it('获取全部问题', async () => {
    const res = await request(app)
      .get('/v1/problems')
      .query({
        limit: 1,
        offset: 0,
        sortby: 'id',
        order: 'desc'
      })
      .expect(200)
    assert.isArray(res.body.data)
    assert.property(res.body.data[0], 'userId')
  })
})
