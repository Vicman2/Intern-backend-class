const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 5050
const rootRoute = require('./src/routes/index.route')

app.use('/api/v1', rootRoute)

app.get('/', (req, res, next) => {
    res.status(200).send("I am here")
})

mongoose.connect('') // Add mongodb uri
    .then(() => {
        console.log('::: Connected to database')
    })
    .catch((err) => {
        console.log('There was an error while connecting to the database', err)
    })


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})