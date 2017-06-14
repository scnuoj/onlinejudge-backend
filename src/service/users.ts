import * as config from 'config'
import { SHA256 } from 'crypto-js'
import * as jwt from 'jsonwebtoken'
import { Service } from 'typedi'
import { AuthError } from '../library/error'
import { BadRequestError } from '../library/error'
import { User } from '../model/user'

const jwtConfig = config.get('Jwt') as Jwt

interface Jwt {
  secret: string
  exp: number
}

@Service()
export class UserService {
  public async register (name: string, email: string, password: string) {
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

  public async login (nameOrEmail: string, password: string) {
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

  public async forget (email: string) {
    const user = await User.findOne<User>({
      where: {
        email
      },
      attributes: {
        exclude: ['password']
      }
    })
    if (!user) {
      throw new BadRequestError('邮箱不存在')
    }
  }

  public async password (userId: string, password: string, newpassword: string) {
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

  public async show (userId) {
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

  private issueToken (id: string) {
    return jwt.sign({
      id,
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
    } as {}, jwtConfig.secret)
  }
}
