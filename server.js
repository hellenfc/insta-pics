var express = require('express');
var app = express();

var ig = require('instagram-node').instagram();

//look for site resources
app.use(express.static(_dirname + '/public'));

// set view engine to ejs
app.set('view engine', 'ejs');

//Setting routes
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.listen(8080);
console.log('App started, look at http://localhost:8080');