const createHttpError = require('http-errors')
const { endpointResponse } = require('../helpers/success')

module.exports = {
  pong: (req, res, next) => {
    try {
      endpointResponse({
        res,
        code: 200,
        status: true,
        message: 'PONG',
      })
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving index] - [index - GET]: ${error.message}`,
      )
      next(httpError)
    }
  },
}
