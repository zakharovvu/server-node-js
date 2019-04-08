var express = require('express');
var app = express();
let port = process.env.PORT || 3000

let data = { count: 0 };
app.get('/inc', function (req, res) { 
  data.count++;
  res.send(JSON.stringify(data.count))
});
app.get('/dec', function (req, res) { 
  data.count--;
  res.send(JSON.stringify(data.count))
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});