const express = require('express')
const app = express()
const data = require('./data')
const cors = require('cors')

app.use(express.json())
app.use(cors())


function getRandomTeam () {
    let teamSelector = Math.floor(Math.random() * (data.length -1))
    return teamSelector;
  }

app.get('/', (req, res) => {
    res.json(data)
})

app.get("/random", (req, res) => {
    res.send(data[getRandomTeam()])
})


app.get("/:team", (req, res) => {
    const idx = req.params.team.toLowerCase();

    data.map( teamData => {
        const currTeam = teamData.team.toLowerCase()
        if ( currTeam.includes(idx) ) {
            res.send(teamData);
        }
    })
})




module.exports = app;
