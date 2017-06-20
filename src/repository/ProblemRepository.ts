import { EntityRepository, Repository } from 'typeorm'
import { Problem } from 'app/entity/Problem'
import { Service } from 'typedi'
import { BadRequestError } from 'routing-controllers'

@Service()
@EntityRepository(Problem)
export class ProblemRepository extends Repository<Problem> {

  public getById (id: number) {
    return this.findOneById(id, {
      join: {
        alias: 'problem',
        innerJoinAndSelect: {
          user: 'problem.user'
        }
      }
    })
  }

  public getList (offset: number, limit: number, sortby: string, order: string) {
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

  public getRecommendList (id: number) {
    return this.find({
      take: 5
    })
  }

}
