import request from 'supertest'

let problem, submissionId

describe('route/submissions', () => {
  before(async () => {
    [problem] = await Database.Problem.mock({
      userId: user.id
    })
  })

  after(async () => {
    await Database.Submission.destroy({
      where: {
        id: submissionId
      }
    })
    await problem.destroy()
  })

  it('提交代码', async () => {
    const res = await request(app)
      .post('/v1/submissions')
      .set('Authorization', `Bearer ${token}`)
      .send({
        id: problem.id,
        code: 'testcode',
        lang: 'cc'
      })
    assert.equal(res.body.data.submissionId, submissionId)
  })
})
