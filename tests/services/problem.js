require('should')
const ProblemService = require('../../services/problem')
const ProblemModel = require('../../models/problem')

let problems = []

describe('Service: Problem', function () {
  before(async function () {
    problems = await ProblemModel[Symbol.for('create')]({ userId: USER.id }, { userId: USER.id }, { userId: USER.id }, { userId: USER.id }, { userId: USER.id })
  })

  after(async function () {
    await Promise.all(problems.map(problem => problem.destroy()))
  })

  it('Func: getProblemById', async () => {
    const problem = await ProblemService.getProblemById(problems[0].id)
    problem.id.should.equal(problems[0].id)
  })

  it('Func: getProblemList', async () => {
    const items = await ProblemService.getProblemList(3, 2, 'updated_at', 'asc')
    items.should.be.an.instanceof(Array)
    items.length.should.be.equal(2)
  })
})
