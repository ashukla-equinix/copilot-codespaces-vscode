//Create web server using express
//Use EJS for templating
//Create a form to submit comments
//Display all comments on the home page

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

var comments = [];

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('comments', {comments: comments});
});

app.post('/comments', function(req, res) {
    comments.push(req.body.comment);
    res.redirect('/');
});

app.listen(3000, function() {
    console.log('Running on port 3000');
});