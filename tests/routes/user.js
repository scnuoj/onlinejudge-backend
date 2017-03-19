require('should')
const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index.js')
const doc = require('test2doc').group('提交').basePath('/users')
const UserModel = require('../../models/user')

describe('Route: User', function () {
  after(async function () {
    await UserModel.destroy({
      where: {
        name: '庄瑞铭123'
      }
    })
  })

  doc.action('注册用户').is(doc => {
    it('注册用户', async function () {
      const res = await request(app).with(doc)
        .post('/api/v1/users/register')
        .send({
          name: doc.val('庄瑞铭123', '用户名'),
          email: doc.val('ruiming.zhuang123@gmail.com', '邮箱'),
          password: doc.val('123456789', '密码')
        })
        .expect(200)
      res.body.success.should.equal(true)
    })
  })

  doc.action('登录用户').is(doc => {
    it('登录用户', async function () {
      const res = await request(app).with(doc)
        .post('/api/v1/users/login')
        .send({
          name: doc.val('庄瑞铭123', '用户名'),
          password: doc.val('123456789', '密码')
        })
        .expect(200)
      res.body.success.should.equal(true)
    })
  })

  doc.action('获取用户信息').is(doc => {
    it('获取用户信息', async function () {
      const res = await request(app).with(doc)
        .get('/api/v1/users')
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(200)
      res.body.data.name.should.equal(USER.name)
      res.body.data.email.should.equal(USER.email)
    })
  })
})
