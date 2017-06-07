export class BadRequestError extends Error {
  readonly status: number

  constructor (message) {
    super()
    this.message = message
    this.status = 400
  }
}

export class AuthError extends Error {
  readonly status: number

  constructor (message) {
    super()
    this.message = message
    this.status = 401
  }
}

export class NotFoundError extends Error {
  readonly status: number

  constructor (message) {
    super()
    this.message = message
    this.status = 404
  }
}

export class ServiceUnavailableError extends Error {
  readonly status: number

  constructor (message) {
    super()
    this.message = message
    this.status = 503
  }
}
