import * as jwt from 'jsonwebtoken'
import { SHA256 } from 'crypto-js'
import { AuthError } from '../library/error'
import * as config from 'config'
import { getEntityManager } from 'typeorm'
import { Problem } from '../entity/problem'
import { User } from '../entity/user'

const jwtConfig = config.get('Jwt') as Jwt

const ProblemRepository = getEntityManager().getRepository(Problem)
const UserRepository = getEntityManager().getRepository(User)

interface Jwt {
  secret: string
  algorithm: string
  exp: number
}

export async function register (name: string, email: string, password: string) {
  const user = await UserRepository.create({
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
  const user = await UserRepository.findOne({
    where: {
      name: name
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
  const user = await UserRepository.findOneById(userId)
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
  }, jwtConfig.secret)
}
