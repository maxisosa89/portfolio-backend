const request = require('supertest')
const app = require('../app')

describe('GET /ping', () => {
  it('respond with PONG', (done) => {
    const bodyResponse = {
      "status": true,
      "message": "PONG"
    }
    request(app).get('/ping').expect(bodyResponse, done)
  })
})
