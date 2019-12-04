const express = require('express')

// const db = require('./db')
// const team=require("./team/model")
const player=require("./player/model")
const app = express()
const teamRouter=require("./team/router")
const playerRouter = require('./player/router')
const bodyParser=require("body-parser")
const jsonParser = bodyParser.json()

app.use(jsonParser)


const port = process.env.PORT || 4003
app.use(teamRouter)
app.use(playerRouter)

app.listen(port, () => console.log(`Listening on :${port}`))