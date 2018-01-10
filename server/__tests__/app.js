const request = require('supertest')
const app = require('../app')

jest.mock('../models/contact')

describe('App', () => {
  it('Tests the root path', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })

  it('Lists contacts', () => {
    return request(app)
      .get('/contacts')
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.body.contacts[0].name).toBe('Scott Cinatl')
      })
  })

  it('Creates contacts', () => {
    return request(app)
      .post('/contacts')
      .send({
        name: 'Scott Cinatl',
        email: 'scott@test.com',
        message: 'Hey there!',
      })
      .then(response => {
        expect(response.statusCode).toBe(201)
        expect(response.body.contact.name).toBe('Scott Cinatl')
        expect(response.body.contact.email).toBe('scott@test.com')
        expect(response.body.contact.message).toBe('Hey there!')
      })
  })

  it('Validates name when creating contact', () => {
    return request(app)
      .post('/contacts')
      .send({
        email: 'scott@test.com',
        message: 'Hey there!',
      })
      .then(response => {
        expect(response.statusCode).toBe(400)
        const error = response.body.errors.validations[0]
        expect(error.param).toBe('name')
        expect(error.msg).toBe('Is required')
      })
  })

  it('Validates email when creating contact', () => {
    return request(app)
      .post('/contacts')
      .send({
        name: 'Scott Cinatl',
        message: 'Hey there!',
      })
      .then(response => {
        expect(response.statusCode).toBe(400)
        const error = response.body.errors.validations[0]
        expect(error.param).toBe('email')
        expect(error.msg).toBe('Is required')
      })
  })

  it('Validates message when creating contact', () => {
    return request(app)
      .post('/contacts')
      .send({
        name: 'Scott Cinatl',
        email: 'scott@test.com',
      })
      .then(response => {
        expect(response.statusCode).toBe(400)
        const error = response.body.errors.validations[0]
        expect(error.param).toBe('message')
        expect(error.msg).toBe('Is required')
      })
  })
})
