var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var db = require('../db/index');
var app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


// the get function 
app.get('/sport', function (req, res) {
  db.selectAll(function (err, data) {

    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


// port works with heroku
var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});



