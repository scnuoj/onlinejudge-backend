import { Service } from 'typedi'
import { BadRequestError } from '../library/error'
import { Problem } from '../model/problem'
import { User } from '../model/user'

@Service()
export class ProblemService {
  // 获取一道问题的详细信息
  public async show (id: number) {
    const problem = await Problem.findById<Problem>(id, {
      include: [{
        model: User,
        as: 'user',
        attributes: ['name', 'id', 'avatar', 'gender', 'school', 'email', 'remark']
      }]
    })
    if (problem) {
      return problem
    } else {
      throw new BadRequestError('题号有误')
    }
  }

  // 获取全部问题
  public async list (offset = 0, limit = 10, sortby = 'id', order = 'desc') {
    const problems = await Problem.findAndCountAll<Problem>({
      limit,
      offset,
      order: [[sortby, order]],
      include: [{
        model: User,
        as: 'user',
        attributes: ['name', 'id', 'avatar', 'gender', 'school', 'email', 'remark']
      }]
    })
    return problems
  }

  // TODO 题目随机推荐
  public async recommend (id: number) {
    const problems = await Problem.findAll<Problem>({
      limit: 5
    })
    return problems
  }
}
