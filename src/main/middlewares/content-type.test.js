const request = require('supertest')
let app

describe('Content-Type Middleware', () => {
  beforeEach(() => {
    jest.resetModules()
    app = require('../config/app')
  })

  test('Deve retornar content type JSON como padrão', async () => {
    app.get('/teste_content_type', (req, res) => {
      res.send('')
    })
    await request(app).get('/teste_content_type').expect('content-type', /json/)
  })

  test('Deve retornar content type xml quando forçado', async () => {
    app.get('/teste_content_type', (req, res) => {
      res.type('xml')
      res.send('')
    })
    await request(app).get('/teste_content_type').expect('content-type', /xml/)
  })
})
