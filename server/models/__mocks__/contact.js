'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = function(sequelize, DataTypes) {
  return dbMock.define('Contact', {
    name: 'Scott Cinatl',
    email: 'scott@test.com',
    message: 'Hey there!',
  })
}
