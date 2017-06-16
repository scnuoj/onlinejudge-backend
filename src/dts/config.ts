export interface IDatabaseConfig {
  name: string
  host: string
  port: number
  username: string
  password: string
}

export interface ICacheConfig {
  host: string
  port: number
  db: number
  prefix: string
  password: string
}

export interface IJwtConfig {
  secret: string
  algorithm: string
  exp: number
}

export interface IConfig {
  Database: IDatabaseConfig
  Cache: ICacheConfig
  Queue: ICacheConfig
  Jwt: IJwtConfig
  
  Env: string
  Port: number
}
