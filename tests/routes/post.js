const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index')
const doc = require('./_doc').group('文章').basePath('/posts')

const PostModel = require('../../models/post')

let post

describe('Route: Post', function () {
  before(async function () {
    [post] = await PostModel[Symbol.for('create')]({})
  })

  after(async function () {
    await post.destroy()
  })

  doc.action('获取文章').is(doc => {
    it('获取文章', async function () {
      const res = await request(app).with(doc)
        .get('/api/v1/posts')
        .query({
          limit: doc.val(1, '限制查询数量')
        })
        .expect(200)
      res.body.data.should.be.an.instanceOf(Array)
      res.body.data[0].should.have.properties('userId', 'problemId')
    })
  })
})
