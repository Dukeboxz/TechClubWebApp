const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const badgeRouter = require('./routers/badges')
const parentRouter = require('./routers/parent')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(badgeRouter)
app.use(parentRouter)

module.exports = app