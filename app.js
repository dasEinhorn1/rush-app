const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Hello, World!");
});

var server = app.listen(3000, function() {
    console.log("Rush app listening at port 3000!");
});