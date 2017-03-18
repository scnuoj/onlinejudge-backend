require('should')
const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index.js')
const doc = require('test2doc').group('用户').basePath('/auth')

const UserModel = require('../../models/user')

describe('Route: User', function () {
  after(async function () {
    await UserModel.destroy({
      where: {
        name: '庄瑞铭123',
        password: '123456789'
      }
    })
  })

  doc.action('注册用户').is(doc => {
    it('注册用户', async function () {
      const res = await request(app).with(doc)
        .post('/api/auth/register')
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
        .post('/api/auth/login')
        .send({
          name: doc.val('庄瑞铭123', '用户名[用户名和邮箱二选一]'),
          email: doc.val('ruiming.zhuang123@gmail.com', '邮箱'),
          password: doc.val('123456789', '密码')
        })
        .expect(200)
      res.body.success.should.equal(true)
    })
  })
})
