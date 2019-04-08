var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
let port = process.env.PORT || 3000
let obj = []
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/users', upload.array(), function (req, res, next) {
  res.json(obj);
});

app.post('/users', upload.array(), function (req, res, next) {
  obj.push(req.body)
  res.json(obj);
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });
