import { User } from 'app/entity/User'
import { SHA256 } from 'crypto-js'
import { BadRequestError } from 'routing-controllers'
import { Service } from 'typedi'
import { EntityRepository, Repository } from 'typeorm'
import { OrmConnection } from 'typeorm-typedi-extensions'

@Service()
@EntityRepository(User)
export class UserRepository extends Repository<User> {

  public getByEmail (email: string) {
    return this.createQueryBuilder('user')
               .where('user.email=:email', { email })
               .getOne()
  }

  public getByNameOrEmail (name: string, email: string) {
    return this.createQueryBuilder('user')
               .where('user.name=:name', { name })
               .orWhere('user.email=:email', { email })
               .getOne()
  }

  public updatePassword (userId: number, password: string, newPassword: string) {
    return this.createQueryBuilder('user')
               .where('user.id=:id', { userId })
               .andWhere('user.password=:password', { password: SHA256(password) })
               .update({
                 password: SHA256(newPassword)
               })
               .execute()
  }

}
