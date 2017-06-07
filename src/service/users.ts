import * as config from 'config'
import { SHA256 } from 'crypto-js'
import * as jwt from 'jsonwebtoken'
import { Service } from 'typedi'
import { AuthError } from '../library/error'
import { User } from '../model/user'

const jwtConfig = config.get('Jwt') as Jwt

interface Jwt {
  secret: string
  exp: number
}

@Service()
export class UserService {
  public async register (name: string, email: string, password: string) {
    const user = await User.create<User>({
      name,
      email,
      password: SHA256(password).toString()
    })
    return {
      user,
      token: this.issueToken(user.id)
    }
  }

  public async login (name: string, password) {
    const user = await User.findOne<User>({
      where: {
        name
      }
    })
    if (user) {
      if (user.password === SHA256(password).toString()) {
        return {
          user,
          token: this.issueToken(user.id)
        }
      } else {
        throw new AuthError('密码错误')
      }
    } else {
      throw new AuthError('用户名不存在')
    }
  }

  public async show (userId) {
    const user = await User.findById<User>(userId)
    if (user) {
      return user
    } else {
      throw new AuthError('用户不存在')
    }
  }

  private issueToken (id: string) {
    return jwt.sign({
      id,
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
    } as {}, jwtConfig.secret)
  }
}
