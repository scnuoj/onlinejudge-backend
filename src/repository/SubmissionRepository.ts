import { EntityRepository, Repository } from 'typeorm'
import { Submission } from 'app/entity/Submission'
import { Service } from 'typedi'
import { BadRequestError } from 'routing-controllers'
import { OrmConnection } from 'typeorm-typedi-extensions'

@Service()
@EntityRepository(Submission)
export class SubmissionRepository extends Repository<Submission> {

  public getWithUserAndProblem (id: number) {
    return this.createQueryBuilder('submission')
               .where('submission.id=:id', { id })
               .innerJoinAndSelect('submission.problem', 'problem')
               .innerJoinAndSelect('submission.user', 'user')
               .getOne()
  }

  public getByProblemId(id: number) {
    return this.createQueryBuilder('submission')
               .where('submission.problemId=:id', { id })
               .getMany()
  }

  public getList(offset: number, limit: number, problemId?: number) {
    const query = this.createQueryBuilder('submission')
                      .offset(offset)
                      .limit(limit)
                      .select(['submission.problem', 'submission.user', 'submission.id'])
                      .innerJoinAndSelect('submission.problem', 'problem')
                      .innerJoinAndSelect('submission.user', 'user')
    return Number.isInteger(problemId) ? query.where('submission.problemId=:problemId', { problemId }).getMany()
                                       : query.getMany()
  }

}
