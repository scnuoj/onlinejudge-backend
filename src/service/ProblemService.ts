import { BadRequestError } from 'routing-controllers'
import { Problem } from 'app/model/Problem'
import { User } from 'app/model/User'
import { Service } from 'typedi'
import { OrmRepository, OrmCustomRepository } from 'typeorm-typedi-extensions'
import { Problem as TProblem } from 'app/entity/Problem'
import { User as TUser } from 'app/entity/User'
import { Repository } from 'typeorm'
import { ProblemRepository } from 'app/repository/ProblemRepository'

@Service()
export class ProblemService {

  @OrmCustomRepository(ProblemRepository)
  private problemRepository: ProblemRepository

  @OrmRepository(TUser)
  private userRepository: Repository<TUser>

  public async show (id: number): Promise<Problem> {
    const problem = await Problem.findById<Problem>(id, {
      include: [{
        model: User,
        as: 'user',
        attributes: ['name', 'id', 'avatar', 'gender', 'school', 'email', 'remark']
      }]
    })
    const row = await this.problemRepository.getProblem(id)
    console.log(row)
    if (problem) {
      return problem
    } else {
      throw new BadRequestError('题号有误')
    }
  }

  public async list (offset: number, limit: number, sortby: string, order: string): Promise<{ rows: Problem[]; count: number; } > {
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

  public async recommend (id: number): Promise<Problem[] > {
    return await Problem.findAll<Problem>({
      limit: 5
    })
  }
}
