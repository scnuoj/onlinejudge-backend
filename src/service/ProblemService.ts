import { BadRequestError } from 'routing-controllers'
import { Service } from 'typedi'
import { OrmRepository, OrmCustomRepository } from 'typeorm-typedi-extensions'
import { Problem } from 'app/entity/Problem'
import { ProblemRepository } from 'app/repository/ProblemRepository'

export type IOrder = 'ASC' | 'DESC'

@Service()
export class ProblemService {

  @OrmCustomRepository(ProblemRepository)
  private problemRepository: ProblemRepository

  public async show (id: number) {
    const problem = await this.problemRepository.getProblem(id)
    if (!problem) {
      throw new BadRequestError(`题号有误: ${id}`)
    }
    return problem
  }

  public async list (offset: number, limit: number, sortby: string, order: IOrder) {
    return this.problemRepository.getProblems(offset, limit, sortby, order)
  }

  public async recommend (id: number) {
    return this.problemRepository.getRecommemdProblems(id)
  }
}
