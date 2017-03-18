require('should')
const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index.js')
const doc = require('test2doc').group('提交').basePath('/users')

describe('用户', function () {
  doc.action('获取用户信息').is(doc => {
    it('获取用户信息', async function () {
      const res = await request(app).with(doc)
        .get('/api/users')
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(200)
      res.body.data.name.should.equal(USER.name)
      res.body.data.email.should.equal(USER.email)
    })
  })
})
