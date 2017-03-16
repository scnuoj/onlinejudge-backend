require('should')
require('../../libraries/Database')
require('../../libraries/Queue')
const { ParamsError } = require('../../libraries/Error')
const ProblemService = require('../../services/problem')
const ProblemModel = require('../../models/problem')
const UserModel = require('../../models/user')

let user
let problems = []

describe('Problem', function () {
  before(async function () {
    [user] = await UserModel[Symbol.for('create')]({})
    problems = await ProblemModel[Symbol.for('create')]({ userId: user.id }, { userId: user.id }, { userId: user.id }, { userId: user.id }, { userId: user.id })
  })

  after(async function () {
    await Promise.all(problems.map(problem => problem.destroy()))
    await user.destroy()
  })

  it('call getProblemById with an exist id should be ok', async () => {
    const problem = await ProblemService.getProblemById(problems[0].id)
    problem.id.should.equal(problems[0].id)
  })

  it('call getProblemlist with valid params should be ok', async () => {
    const items = await ProblemService.getProblemList(3, 2, 'updated_at', 'asc')
    items.should.be.an.instanceof(Array)
    items.length.should.be.equal(2)
  })
})
