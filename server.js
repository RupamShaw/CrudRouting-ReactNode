var express = require('express');
var app = express();

var bodyparser = require('body-parser');
//var cors = require('cors');
app.use(bodyparser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyparser.json());
// http://expressjs.com/en/starter/static-files.html

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
var routes = require('./routes/index')
app.use('/',routes);
// http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (request, response) {
//   response.sendFile(__dirname + '/views/index.html');
// });
// listen for requests :)

// listen for requests :)
var listener = app.listen(3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });
// i am not able to import setstate in navigation.js from main.js