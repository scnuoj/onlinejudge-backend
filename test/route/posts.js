import request from 'supertest'

let post

describe('route/posts', () => {
  before(async () => {
    [post] = await Database.Post.mock({})
  })

  after(async () => {
    await post.destroy()
  })

  it('获取文章', async () => {
    const res = await request(app)
      .get('/v1/posts')
      .query({
        limit: 1
      })
      .expect(200)
    assert.isArray(res.body.data)
    assert.property(res.body.data[0], 'userId')
  })
})
