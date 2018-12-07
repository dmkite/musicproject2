const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/auth', require('./routes/auth'))
app.use('/users', require('./routes/users'))

app.use((req, res, next) => {
    res.status(404).send({message: "Couldn't find it, bruh"})
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).send({message:err.message})
})

const listener = () => {console.log(`Getting down on port ${port}`)}
app.listen(port, listener)