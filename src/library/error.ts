export class BadRequestError extends Error {
  public readonly status: number

  constructor (message: string) {
    super()
    this.message = message
    this.status = 400
  }
}

export class AuthError extends Error {
  public readonly status: number

  constructor (message: string) {
    super()
    this.message = message
    this.status = 401
  }
}

export class NotFoundError extends Error {
  public readonly status: number

  constructor (message: string) {
    super()
    this.message = message
    this.status = 404
  }
}

export class ServiceUnavailableError extends Error {
  public readonly status: number

  constructor (message: string) {
    super()
    this.message = message
    this.status = 503
  }
}

export class HttpError extends Error {
  public readonly status: number
  public readonly message: string

  constructor (status: number, message: string) {
    super()
    this.status = status
    this.message = message
  }
}
