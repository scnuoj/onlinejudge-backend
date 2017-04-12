const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index')
const doc = require('./_doc').group('提交').basePath('/users')
const assert = require('assert')

describe('Route: User', function () {
  after(async function () {
    await Database.User.destroy({
      where: {
        name: '庄瑞铭123'
      }
    })
  })

  doc.action('注册用户').is(doc => {
    it('注册用户', async function () {
      const res = await request(app).with(doc)
        .post('/v1/users/register')
        .send({
          name: doc.val('庄瑞铭123', '用户名'),
          email: doc.val('ruiming.zhuang123@gmail.com', '邮箱'),
          password: doc.val('123456789', '密码')
        })
        .expect(200)
      assert(res.body.success === true)
    })
  })

  doc.action('登录用户').is(doc => {
    it('登录用户', async function () {
      const res = await request(app).with(doc)
        .post('/v1/users/login')
        .send({
          name: doc.val('庄瑞铭123', '用户名'),
          password: doc.val('123456789', '密码')
        })
        .expect(200)
      assert(res.body.success === true)
    })
  })

  doc.action('获取用户信息').is(doc => {
    it('获取用户信息', async function () {
      const res = await request(app).with(doc)
        .get('/v1/users')
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(200)
      assert(res.body.data.name === USER.name)
    })
  })
})
