import { BadRequestError } from 'routing-controllers'
import { Problem } from 'app/model/Problem'
import { User } from 'app/model/User'
import { Service } from 'typedi'
import { OrmRepository } from 'typeorm-typedi-extensions'
import { Problem as TProblem } from 'app/entity/Problem'
import { Repository } from 'typeorm'

@Service()
export class ProblemService {

  @OrmRepository(TProblem)
  private problemRepository: Repository<TProblem>

  public async show (id: number): Promise<Problem> {
    const problem = await Problem.findById<Problem>(id, {
      include: [{
        model: User,
        as: 'user',
        attributes: ['name', 'id', 'avatar', 'gender', 'school', 'email', 'remark']
      }]
    })
    const rows = await this.problemRepository.findByIds([id])
    console.log(rows)
    if (problem) {
      return problem
    } else {
      throw new BadRequestError('题号有误')
    }
  }

  public async list (offset: number, limit: number, sortby: string, order: string): Promise<{ rows: Problem[]; count: number; }> {
    return await Problem.findAndCountAll<Problem>({
      limit,
      offset,
      order: [[sortby, order]],
      include: [{
        model: User,
        as: 'user',
        attributes: ['name', 'id', 'avatar', 'gender', 'school', 'email', 'remark']
      }]
    })
  }

  public async recommend (id: number): Promise<Problem[]> {
    return await Problem.findAll<Problem>({
      limit: 5
    })
  }
}
