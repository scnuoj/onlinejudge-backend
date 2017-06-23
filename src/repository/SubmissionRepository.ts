import { Submission } from 'app/entity/Submission'
import * as faker from 'faker'
import { BadRequestError } from 'routing-controllers'
import { Service } from 'typedi'
import { EntityRepository, Repository } from 'typeorm'
import { OrmConnection } from 'typeorm-typedi-extensions'
import { DeepPartial } from 'typeorm/common/DeepPartial'

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

  public fake (item?: DeepPartial<Submission>) {
    return this.persist(this.create({
      code: faker.lorem.sentences(),
      lang: 'c',
      cpuTime: faker.random.number(),
      realTime: faker.random.number(),
      signal: faker.random.number(),
      memory: faker.random.number(),
      exitCode: faker.random.number(),
      result: faker.random.number(),
      error: faker.random.number(),
      ...item
    }))
  }

}
