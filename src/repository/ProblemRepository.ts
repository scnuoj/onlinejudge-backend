import { EntityRepository, Repository } from 'typeorm'
import { Problem } from 'app/entity/Problem'
import { Service } from 'typedi'
import { BadRequestError } from 'routing-controllers'

export type IOrder = 'ASC' | 'DESC'

@Service()
@EntityRepository(Problem)
export class ProblemRepository extends Repository<Problem> {

  public getProblem (id: number) {
    return this.findOneById(id, {
      join: {
        alias: 'problem',
        innerJoinAndSelect: {
          user: 'problem.user'
        }
      }
    })
  }

  public getProblems(offset: number, limit: number, sortby: string, order: IOrder) {
    return this.findAndCount({
      skip: offset,
      take: limit,
      order: {
        [sortby]: order
      },
      join: {
        alias: 'problem',
        innerJoinAndSelect: {
          user: 'problem.user'
        }
      }
    })
  }

  public getRecommemdProblems (id: number) {
    return this.find({
      take: 5
    })
  }

}
