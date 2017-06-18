import { BadRequestError } from 'routing-controllers'
import { User } from 'app/model/User'
import { IJwtConfig } from 'app/typing/config'
import * as config from 'config'
import { SHA256 } from 'crypto-js'
import * as jwt from 'jsonwebtoken'
import { Service } from 'typedi'

const jwtConfig = <IJwtConfig>config.get('Jwt')

export interface IUserMsgWithToken extends User {
  token: string
}

@Service()
export class UserService {
  public async register (name: string, email: string, password: string): Promise<IUserMsgWithToken> {
    const duplicateUser = await User.find<User>({
      where: {
        $or: [{
          name
        }, {
          email
        }]
      }
    })
    if (duplicateUser) {
      if (duplicateUser.name === name) {
        throw new BadRequestError('用户名已被使用')
      }
      if (duplicateUser.email === email) {
        throw new BadRequestError('邮箱已被注册')
      }
    }
    const user = await User.create<User>({
      name,
      email,
      password: SHA256(password).toString()
    })
    Reflect.deleteProperty(user.toJSON(), 'password')

    return {
      ...user.toJSON(),
      token: this.issueToken(user.id)
    }
  }

  public async login (nameOrEmail: string, password: string): Promise<IUserMsgWithToken> {
    const user = await User.find<User>({
      where: {
        $or: [{
          name: nameOrEmail
        }, {
          email: nameOrEmail
        }]
      }
    })
    if (user) {
      if (user.password === SHA256(password).toString()) {
        Reflect.deleteProperty(user.toJSON(), 'password')

        return {
          ...user.toJSON(),
          token: this.issueToken(user.id)
        }
      }
      throw new BadRequestError('密码错误')
    }
    throw new BadRequestError('用户名或邮箱不存在')
  }

  public async forget (email: string): Promise<void> {
    const user = await User.findOne<User>({
      where: {
        email
      }
    })
    if (!user) {
      throw new BadRequestError('邮箱不存在')
    }
  }

  public async password (userId: string, password: string, newpassword: string): Promise<void> {
    const user = await User.find<User>({
      where: {
        id: userId,
        password: SHA256(password).toString()
      }
    })
    if (user) {
      user.password = SHA256(newpassword).toString()
      await user.save()
    } else {
      throw new BadRequestError('密码不正确')
    }
  }

  public async show (userId: string): Promise<User> {
    const user = await User.findById<User>(userId, {
      attributes: {
        exclude: ['password']
      }
    })
    if (user) {
      return user
    } else {
      throw new BadRequestError('用户不存在')
    }
  }

  private issueToken (id: string): string {
    return jwt.sign(<object>{
      id: id,
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
    }, jwtConfig.secret)
  }
}
