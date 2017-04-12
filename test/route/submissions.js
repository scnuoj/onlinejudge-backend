const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index')
const doc = require('./_doc').group('提交').basePath('/submissions')
const assert = require('assert')

let problem, submissionId

describe('Route: Submission', function () {
  before(async function () {
    [problem] = await Database.Problem.mock({
      userId: USER.id
    })
  })

  after(async function () {
    await Database.Submission.destroy({
      where: {
        id: submissionId
      }
    })
    await problem.destroy()
  })

  doc.action('提交代码').is(doc => {
    it('提交代码', async function () {
      const res = await request(app).with(doc)
        .post('/v1/submissions')
        .set('Authorization', `Bearer ${TOKEN}`)
        .send({
          id: doc.val(problem.id, '题目 ID'),
          code: doc.val('testcode', '用户代码'),
          lang: doc.val('cc', '代码语言')
        })
        .expect(200)
      assert(res.body.data.submissionId === submissionId)
    })
  })
})
