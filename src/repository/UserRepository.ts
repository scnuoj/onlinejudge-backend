import { User } from 'app/entity'
import { SHA256 } from 'crypto-js'
import * as faker from 'faker'

import { Service } from 'typedi'
import { EntityRepository, Repository } from 'typeorm'

import { DeepPartial } from 'typeorm/common/DeepPartial'

@Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> {

  public getByEmail (email: string): Promise<User | undefined> {
    return this.createQueryBuilder('user')
               .where('user.email=:email', { email })
               .getOne()
  }

  public getByNameOrEmail (name: string, email: string): Promise<User | undefined> {
    return this.createQueryBuilder('user')
               .where('user.name=:name', { name })
               .orWhere('user.email=:email', { email })
               .getOne()
  }

  public updatePassword (userId: number, password: string, newPassword: string): Promise<any> {
    return this.createQueryBuilder('user')
               .where('user.id=:id', { userId })
               .andWhere('user.password=:password', { password: SHA256(password) })
               .update({
                 password: SHA256(newPassword)
               })
               .execute()
  }

  public fake (item?: DeepPartial<User>): Promise<User> {
    return this.persist(this.create({
      name: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      school: faker.random.words(4),
      gender: faker.random.number({ min: 1, max: 2 }),
      avatar: faker.image.avatar(),
      remark: faker.lorem.lines(),
      ...item
    }))
  }

}
