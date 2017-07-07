import { sign } from 'jsonwebtoken'
import * as config from 'config'

const jwtConfig = config.jwt

export function issueToken (body: any): string {
  const exp = (new Date().getTime() + 5184000000) / 1000
  return sign({ ...body, exp }, jwtConfig.secret)
}
