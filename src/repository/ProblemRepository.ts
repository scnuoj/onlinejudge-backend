import { EntityRepository, Repository } from 'typeorm'
import { Problem } from 'app/entity/Problem'
import { Service } from 'typedi'

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

}
