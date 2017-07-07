import { sign } from 'jsonwebtoken'
import * as config from 'config'

const jwtConfig = config.jwt

export function issueToken (id: number): string {
  const exp = (new Date().getTime() + 5184000000) / 1000
  return sign({ id, exp }, jwtConfig.secret)
}
