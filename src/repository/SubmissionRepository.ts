import { Submission } from 'app/entity'
import * as faker from 'faker'

import { Service } from 'typedi'
import { EntityRepository, Repository } from 'typeorm'

import { DeepPartial } from 'typeorm/common/DeepPartial'

@Service()
@EntityRepository(Submission)
export class SubmissionRepository extends Repository<Submission> {

  public getWithUserAndProblem (id: number): Promise<Submission | undefined> {
    return this.createQueryBuilder('submission')
               .where('submission.id=:id', { id })
               .innerJoinAndSelect('submission.problem', 'problem')
               .innerJoinAndSelect('submission.user', 'user')
               .getOne()
  }

  public getByProblemId (id: number): Promise<Submission[]> {
    return this.createQueryBuilder('submission')
               .where('submission.problemId=:id', { id })
               .andWhere('submission.result IS NOT NULL')
               .getMany()
  }

  public getAllSubmissions (limit: number, offset: number, problemId?: number): Promise<Submission[]> {
    const query = this.createQueryBuilder('submission')
                      .offset(offset)
                      .limit(limit)
                      // .select(['submission.problem', 'submission.user', 'submission.id'])
                      .innerJoinAndSelect('submission.problem', 'problem')
                      .innerJoinAndSelect('submission.user', 'user')
    return typeof problemId === 'number' ? query.where('submission.problemId=:problemId', { problemId }).getMany()
                                         : query.getMany()
  }

  public getMySubmissions (userId: number, limit: number, offset: number, problemId?: number): Promise<Submission[]> {
    console.log(offset, limit, problemId, userId)
    const query = this.createQueryBuilder('submission')
                      .select(['submission.problem', 'submission.user', 'submission.id'])
                      .innerJoinAndSelect('submission.problem', 'problem')
                      .innerJoinAndSelect('submission.user', 'user')
                      .skip(offset)
                      .take(limit)
                      .where('user.id=:userId', { userId })
    return typeof problemId === 'number' ? query.andWhere('submission.problemId=:problemId', { problemId }).getMany()
                                         : query.getMany()
  }

  public fake (item?: DeepPartial<Submission>): Promise<Submission> {
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
