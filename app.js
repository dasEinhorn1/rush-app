const express = require('express')
const app = express()
const routes = require('./routes/routes')
const bodyParser = require('body-parser')

/*
  Define app middleware use's here
*/

app.use(bodyParser.json());

// connect all routes to app (see routes/ directory)
routes(app)

// run server
app.listen(3000, function () {
  console.log('Rush app listening at port 3000!')
})
