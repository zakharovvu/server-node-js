var express = require('express');
var app = express();
let port = process.env.PORT || 3000
let data = { count: 0 };

app.get('/', function (req, res) { 
  res.set('Access-Control-Allow-Origin', '*')
  res.send(JSON.stringify(data.count))
})

app.get('/inc', function (req, res) { 
  data.count++;
  res.set('Access-Control-Allow-Origin', '*')
  res.send(JSON.stringify(data.count))
});
app.get('/dec', function (req, res) { 
  data.count--;
  res.set('Access-Control-Allow-Origin', '*')
  res.send(JSON.stringify(data.count))
});
app.get('/reset', function (req, res) { 
  data.count = 0;
  res.set('Access-Control-Allow-Origin', '*')
  res.send(JSON.stringify(data.count))
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});