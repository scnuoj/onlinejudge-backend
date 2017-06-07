import * as config from 'config'
import { SHA256 } from 'crypto-js'
import * as jwt from 'jsonwebtoken'
import { Model } from 'sequelize-typescript'
import { AuthError } from '../library/error'
import { User } from '../model/user'

const jwtConfig = config.get('Jwt') as Jwt

interface Jwt {
  secret: string
  exp: number
}

export async function register (name: string, email: string, password: string) {
  const user = await User.create<User>({
    name,
    email,
    password: SHA256(password).toString()
  })
  return {
    user,
    token: issueToken(user.id)
  }
}

export async function login (name: string, password) {
  const user = await User.findOne<User>({
    where: {
      name
    }
  })
  if (user) {
    if (user.password === SHA256(password).toString()) {
      return {
        user,
        token: this.issueToken
      }
    } else {
      throw new AuthError('密码错误')
    }
  } else {
    throw new AuthError('用户名不存在')
  }
}

export async function show (userId) {
  const user = await User.findById<User>(userId)
  if (user) {
    return user
  } else {
    throw new AuthError('用户不存在')
  }
}

function issueToken (id: string) {
  return jwt.sign({
    id,
    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
  } as {}, jwtConfig.secret)
}
