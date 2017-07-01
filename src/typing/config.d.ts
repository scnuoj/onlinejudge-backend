declare module 'config' {
  export const database: {
    name: string
    host: string
    port: number
    username: string
    password: string
  }

  export const cache: {
    host: string
    port: number
    db: number
    prefix: string
    password: string
  }

  export const jwt: {
    secret: string
    algorithm: string
    exp: number
  }

  export const env: string
  export const port: number
}
