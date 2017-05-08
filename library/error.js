export class BadRequestError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 400
  }
}

export class AuthError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 401
  }
}

export class NotFoundError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 404
  }
}

export class ServiceUnavailableError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 503
  }
}
