const express = require('express')
require('./db/mongoose')

const app = express

app.request(express.json())

module.exports = app