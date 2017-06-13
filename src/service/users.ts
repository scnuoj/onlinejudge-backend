import * as config from 'config'
import { SHA256 } from 'crypto-js'
import * as jwt from 'jsonwebtoken'
import { Service } from 'typedi'
import { AuthError } from '../library/error'
import {BadRequestError} from '../library/error'
import { User } from '../model/user'

const jwtConfig = config.get('Jwt') as Jwt

interface Jwt {
  secret: string
  exp: number
}

@Service()
export class UserService {
  public async register (name: string, password: string) {
    const user1 = await User.findAll<User>({
      where: {
        name
      }
    })
    if (user1) {
      throw new BadRequestError('用户名已存在')
    } else {
      const user = await User.create<User>({
        name,
        password: SHA256(password).toString()
      })
      return {
        user,
        token: this.issueToken(user.id)
      }
    }
  }

  public async login (nameOrEmail: string, password: string) {
    const user = await User.findOne<User>({
      where: {
        nameOrEmail
      }
    })
    if (user) {
      if (user.password === SHA256(password).toString()) {
        return {
          user,
          token: this.issueToken(user.id)
        }
      } else {
        throw new BadRequestError('密码错误')
      }
    } else {
      throw new BadRequestError('用户名不存在或邮箱有误')
    }
  }

  public async forget (email: string) {
    const user = await User.findAll<User>({
      where: {
        email
      }
    })
    if (user) {
      return user
    } else {
      throw new BadRequestError('邮箱不存在')
    }
  }

  public async show (userId) {
    const user = await User.findById<User>(userId)
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
