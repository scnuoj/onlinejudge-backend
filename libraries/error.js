class ParamsError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 400
    this.name = 'ParamsError'
  }
}

class AuthError extends Error {
  constructor (message) {
    super()
    this.message = message
    this.status = 401
    this.name = 'AuthError'
  }
}

module.exports = {
  ParamsError,
  AuthError
}
