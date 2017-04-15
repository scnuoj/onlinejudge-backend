const request = require('supertest-test2doc')(require('supertest'))
const doc = require('./_doc').group('问题').basePath('/management/problems')

let problem

describe('route/managerment/problem', () => {
  before(async () => {
    [problem] = await Database.Problem.create({
      userId: User.id
    })
  })

  after(async () => {
    await problem.destroy()
  })

  doc.action('获取一道问题').is(doc => {
    it('获取一道问题', async () => {
      const res = await request(app).with(doc)
        .get(`/v1/management/problems/${problem.id}`)
        .set('Authorization', `Bearer ${Token}`)
        .expect(200)
      assert.equal(res.body.data.id, problem.id)
    })
  })

  doc.action('获取全部问题').is(doc => {
    it('获取全部问题', async () => {
      const res = await request(app).with(doc)
        .get('/v1/management/problems')
        .set('Authorization', `Bearer ${Token}`)
        .query({
          limit: doc.val(1, '限制查询数量'),
          offset: doc.val(0, '查询偏移'),
          sortby: doc.val('id', '排序依据, 默认为 id, 可选 submitCount, passCount, percent'),
          order: doc.val('desc', '排序顺序, 默认为 desc, 可选 asc')
        })
        .expect(200)
      assert.isNumber(res.body.data.count)
      assert.isArray(res.body.data.rows)
    })
  })
})
