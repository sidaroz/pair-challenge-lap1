const express = require('express')
const app = express()
const data = require('./data')

app.use(express.json())


app.get('/', (req, res) => {
    res.send("LAP 1 Code Challenge")
})



module.exports = app;
