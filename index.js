const express = require('express')
// const db = require('./db')
// const team=require("./team/model")
const teamRouter=require("./team/router")

const app = express()
const port = process.env.PORT || 4003
app.use(teamRouter)

app.listen(port, () => console.log(`Listening on :${port}`))