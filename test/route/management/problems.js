const request = require('supertest')

let problem

describe('route/management/problems', () => {
  before(async () => {
    [problem] = await Database.Problem.create({
      userId: user.id
    })
  })

  after(async () => {
    await problem.destroy()
  })

  it('获取一道问题', async () => {
    const res = await request(app)
      .get(`/v1/management/problems/${problem.id}`)
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
    assert.equal(res.body.data.id, problem.id)
  })

  it('获取全部问题', async () => {
    const res = await request(app)
      .get('/v1/management/problems')
      .set('Authorization', `Bearer ${token}`)
      .query({
        limit: 1,
        offset: 0,
        sortby: 'id',
        order: 'desc'
      })
      .expect(200)
    assert.isNumber(res.body.data.count)
    assert.isArray(res.body.data.rows)
  })
})
