require('should')
const request = require('supertest')
const app = require('../../index.js')
const doc = require('test2doc').group('用户接口').basePath('/user')

const UserModel = require('../../models/user')

describe('用户路由', function () {
  after(async function () {
    await UserModel.destroy({
      where: {
        name: '庄瑞铭',
        password: '123456789'
      }
    })
  })

  doc.action('注册用户').is(doc => {
    it('注册用户', async function () {
      let res = await request(app)
        .post(doc.post('/api/user/register'))
        .send(doc.reqBody({
          name: doc.val('庄瑞铭', '用户名'),
          email: doc.val('ruiming.zhuang@gmail.com', '邮箱'),
          password: doc.val('123456789', '密码')
        }))
        .expect(200)
      res = doc.resBody(res.body)
      res.success.should.ok()
    })
    it('登录用户', async function () {
      let res = await request(app)
        .post(doc.post('/api/user/login'))
        .send(doc.reqBody({
          name: doc.val('庄瑞铭', '用户名[与邮箱二选一]'),
          email: doc.val('ruiming.zhuang@gmail.com', '邮箱'),
          password: doc.val('123456789', '密码')
        }))
        .expect(200)
      res = doc.resBody(res.body)
      res.success.should.ok()
    })
  })
})
