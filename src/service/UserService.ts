import { User } from 'app/entity'
import { UserRepository } from 'app/repository'
import { IJwtConfig } from 'app/typing/config'
import * as config from 'config'
import { SHA256 } from 'crypto-js'
import * as jwt from 'jsonwebtoken'
import { BadRequestError } from 'routing-controllers'
import { Service } from 'typedi'
import { OrmCustomRepository } from 'typeorm-typedi-extensions'

@Service()
export class UserService {

  @OrmCustomRepository(UserRepository)
  private userRepository: UserRepository

  public async register (name: string, email: string, password: string): Promise<{ user: User, token: string }> {
    const duplicateUser = await this.userRepository.getByNameOrEmail(name, email)
    if (duplicateUser) {
      if (duplicateUser.name === name) {
        throw new BadRequestError('用户名已被使用')
      }
      if (duplicateUser.email === email) {
        throw new BadRequestError('邮箱已被注册')
      }
    }
    const user = await this.userRepository.persist(this.userRepository.create({
      name,
      email,
      password: SHA256(password).toString()
    }))
    return {
      user,
      token: this.issueToken(user.id)
    }
  }

  public async login (nameOrEmail: string, password: string): Promise<{ user: User, token: string }> {
    const user = await this.userRepository.getByNameOrEmail(nameOrEmail, nameOrEmail)
    if (user) {
      if (user.password === SHA256(password).toString()) {
        return {
          user,
          token: this.issueToken(user.id)
        }
      }
      throw new BadRequestError('密码错误')
    }
    throw new BadRequestError('用户名或邮箱不存在')
  }

  public async forget (email: string): Promise<void> {
    const user = this.userRepository.getByEmail(email)
    if (!user) {
      throw new BadRequestError('邮箱不存在')
    }
  }

  public async password (userId: number, password: string, newPassword: string): Promise<void> {
    const status = await this.userRepository.updatePassword(userId, password, newPassword)
    if (!status.affectedRows) {
      throw new BadRequestError('原密码不正确')
    }
  }

  public async show (userId: number): Promise<User> {
    const user = await this.userRepository.findOneById(userId)
    if (user) {
      return user
    } else {
      throw new BadRequestError('用户不存在')
    }
  }

  private issueToken (id: number): string {
    return jwt.sign({
      id: id,
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
    }, (config.get('Jwt') as IJwtConfig).secret)
  }
}
