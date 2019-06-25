const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const badgeRouter = require('./routers/badges')

const app = express()

app.use(express.json())
app.use(userRouter)

module.exports = app