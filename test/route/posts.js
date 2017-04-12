const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index')
const doc = require('./_doc').group('文章').basePath('/posts')
const assert = require('assert')

let post

describe('Route: Post', function () {
  before(async function () {
    [post] = await Database.Post.mock({})
  })

  after(async function () {
    await post.destroy()
  })

  doc.action('获取文章').is(doc => {
    it('获取文章', async function () {
      const res = await request(app).with(doc)
        .get('/v1/posts')
        .query({
          limit: doc.val(1, '限制查询数量')
        })
        .expect(200)
      assert(Array.isArray(res.body.data))
      assert.equal(typeof res.body.data[0].userId, 'string')
    })
  })
})
