const express = require("express");
const app = express();
const routes = require("./routes/routes")

/*
  Define app middleware use's here
*/


// connect all routes to app (see routes/ directory)
routes(app)

// run server
var server = app.listen(3000, function() {
  console.log("Rush app listening at port 3000!");
});
