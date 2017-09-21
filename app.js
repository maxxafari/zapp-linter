var express = require('express')
var app = express()

app.get('/zapp', function (req, res) {
  res.json({status:"ok"});
})

app.listen(3000)
