import { Problem } from 'app/entity'
import * as faker from 'faker'
import 'reflect-metadata'
import { Service } from 'typedi'
import { EntityRepository, Repository } from 'typeorm'
import { DeepPartial } from 'typeorm/common/DeepPartial'

@Service()
@EntityRepository(Problem)
export class ProblemRepository extends Repository<Problem> {

  public getById (id: number): Promise<Problem | undefined> {
    return this.createQueryBuilder('problem')
               .where('problem.id=:id', { id })
               .innerJoinAndSelect('problem.user', 'user')
               .getOne()
  }

  public getList (offset: number, limit: number, sortby: string, order: string): Promise<[Problem[], number]> {
    return this.createQueryBuilder('problem')
               .orderBy(`problem.${sortby}`, order as 'ASC'|'DESC')
               .innerJoinAndSelect('problem.user', 'user')
               .setFirstResult(offset)
               .setMaxResults(limit)
               .getManyAndCount()
  }

  public getRecommendList (id: number): Promise<Problem[]> {
    return this.createQueryBuilder('problem')
               .limit(5)
               .getMany()
  }

  public fake (item?: DeepPartial<Problem>): Promise<Problem> {
    return this.persist(this.create({
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraphs(),
      lang: 'c',
      inputData: faker.lorem.sentence(),
      outputData: faker.lorem.sentence(),
      submitCount: faker.random.number({ min: 100, max: 200 }),
      passCount: faker.random.number({ min: 10, max: 20 }),
      maxCpuTime: faker.random.number(),
      maxRealTime: faker.random.number(),
      maxMemory: faker.random.number(),
      maxProcessNumber: faker.random.number(),
      maxOutputSize: faker.random.number(),
      ...item
    }))
  }

}
