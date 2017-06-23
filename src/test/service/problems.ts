import { createConnection } from 'app'
import { ProblemRepository, UserRepository } from 'app/repository'
import { Problem, User } from 'app/entity'
import { Connection } from 'typeorm'
import { Container } from 'typedi'
import { assert } from 'chai'
import { ProblemService } from 'app/service'

describe.skip('ProblemService', () => {
  let db: Connection
  let user: User
  let problem: Problem
  let userRepository: UserRepository
  let problemRepository: ProblemRepository
  let problemService: ProblemService

  before('', async () => {
    db = await createConnection
    userRepository = db.getCustomRepository(UserRepository)
    problemRepository = db.getCustomRepository(ProblemRepository)
    problemService = Container.get(ProblemService)

    user = await userRepository.fake()
    problem = await problemRepository.fake({ user: user })
  })

  after(async () => {
    await problemRepository.remove(problem)
    await userRepository.remove(user)
  })

  it('Test show with normal id', async () => {
    const result = await problemService.show(problem.id)
    assert.instanceOf(result, Problem)
    assert.equal(result.id, problem.id)
  })

  it('Test show with inexisted id', async () => {
    await assert.isRejected(problemService.show(12312312312), `题号有误: 12312312312`)
  })

  it('Test show with float number', async () => {
    await assert.isRejected(problemService.show(1.2), `题号有误: 1.2`)
  })

  it('Test list with normal arguments', async () => {
    const result = await problemService.list(0, 1, 'id', 'ASC')
    assert.isNumber(result[1])
    assert.isArray(result[0])
    assert.lengthOf(result[0], 1)
  })

})
