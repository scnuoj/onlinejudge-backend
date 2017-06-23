import { Problem } from 'app/entity/Problem'
import * as faker from 'faker'
import 'reflect-metadata'
import { BadRequestError } from 'routing-controllers'
import { Service } from 'typedi'
import { EntityRepository, Repository, Transaction } from 'typeorm'
import { DeepPartial } from 'typeorm/common/DeepPartial'

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

  public fake (item?: DeepPartial<Problem>) {
    return this.persist(this.create({
      title: faker.lorem.text(),
      description: faker.lorem.paragraphs(),
      lang: 'c',
      input: faker.lorem.sentence(),
      output: faker.lorem.sentence(),
      sampleInput: faker.lorem.sentence(),
      sampleOutput: faker.lorem.sentence(),
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
