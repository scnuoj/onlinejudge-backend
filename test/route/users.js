const request = require('supertest')

describe('route/users', () => {
  after(async () => {
    await Database.User.destroy({
      where: {
        name: '庄瑞铭123'
      }
    })
  })

  it('注册用户', async () => {
    const res = await request(app)
      .post('/v1/users/register')
      .send({
        name: '庄瑞铭123',
        email: 'ruiming.zhuang123@gmail.com',
        password: '123456789'
      })
      .expect(200)
    assert.isTrue(res.body.success)
  })

  it('登录用户', async () => {
    const res = await request(app)
      .post('/v1/users/login')
      .send({
        name: '庄瑞铭123',
        password: '123456789'
      })
      .expect(200)
    assert.isTrue(res.body.success)
  })

  it('获取用户信息', async () => {
    const res = await request(app)
      .get('/v1/users')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
    assert.equal(res.body.data.name, user.name)
  })
})
