class BadRequestError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 400
  }
}

class AuthError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 401
  }
}

class NotFoundError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 404
  }
}

class ServiceUnavailableError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 503
  }
}

module.exports = {
  AuthError,
  BadRequestError,
  NotFoundError,
  ServiceUnavailableError
}
