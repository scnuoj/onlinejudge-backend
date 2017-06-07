import { Service } from 'typedi'
import { BadRequestError } from '../library/error'
import { Problem } from '../model/problem'
import { User } from '../model/user'

@Service()
export class ProblemService {
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
}
