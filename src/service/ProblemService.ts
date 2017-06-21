import { Problem } from 'app/entity'
import { ProblemRepository } from 'app/repository/ProblemRepository'
import { BadRequestError } from 'routing-controllers'
import { Service } from 'typedi'
import { OrmCustomRepository, OrmRepository } from 'typeorm-typedi-extensions'

@Service()
export class ProblemService {

  @OrmCustomRepository(ProblemRepository)
  private problemRepository: ProblemRepository

  public async show (id: number) {
    const problem = await this.problemRepository.getById(id)
    if (!problem) {
      throw new BadRequestError(`题号有误: ${id}`)
    }
    return problem
  }

  public async list (offset: number, limit: number, sortby: string, order: string) {
    return this.problemRepository.getList(offset, limit, sortby, order)
  }

  public async recommend (id: number) {
    return this.problemRepository.getRecommendList(id)
  }
}
