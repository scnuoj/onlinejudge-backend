require('should')
const request = require('supertest-test2doc')(require('supertest'))
const app = require('../../index.js')
const doc = require('test2doc').group('提交').basePath('/submissions')

const ProblemModel = require('../../models/problem')
const SubmissionModel = require('../../models/submission')

let problem, submissionId

describe('Route: Submission', function () {
  before(async function () {
    [problem] = await ProblemModel[Symbol.for('create')]({
      userId: USER.id
    })
  })

  after(async function () {
    await SubmissionModel.destroy({
      where: {
        id: submissionId
      }
    })
    await problem.destroy()
  })

  doc.action('提交代码').is(doc => {
    it('提交代码', async function () {
      const res = await request(app).with(doc)
        .post('/api/submissions')
        .set('Authorization', `Bearer ${TOKEN}`)
        .send({
          id: doc.val(problem.id, '题目 ID'),
          code: doc.val('testcode', '用户代码'),
          lang: doc.val('cc', '代码语言')
        })
        .expect(200)
      res.body.data.should.have.properties('submissionId')
      submissionId = res.body.data.submissionId
    })
  })
})
