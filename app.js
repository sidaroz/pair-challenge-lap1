const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("LAP 1 Code Challenge")
})



module.exports = app;
