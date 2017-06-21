import { Problem } from 'app/entity/Problem'
import { BadRequestError } from 'routing-controllers'
import { Service } from 'typedi'
import { EntityRepository, Repository } from 'typeorm'

@Service()
@EntityRepository(Problem)
export class ProblemRepository extends Repository<Problem> {

  public getById (id: number) {
    return this.createQueryBuilder('problem')
               .innerJoinAndSelect('problem.user', 'user')
               .getOne()
  }

  public getList (offset: number, limit: number, sortby: string, order: string) {
    return this.createQueryBuilder('problem')
               .limit(limit)
               .offset(offset)
               .orderBy(sortby, <'ASC'|'DESC'>order)
               .innerJoinAndSelect('problem.user', 'user')
               .getManyAndCount()
  }

  public getRecommendList (id: number) {
    return this.createQueryBuilder('problem')
               .limit(5)
               .getMany()
  }

}
