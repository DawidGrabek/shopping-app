require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const addOrder = require('./routes/addOrder')
const dataRouters = require('./routes/data')

//middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users/addOrder', addOrder)
app.use('/api/data', dataRouters)

const port = process.env.PORT || 8080

const connection = require('./db')
connection()

app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))
