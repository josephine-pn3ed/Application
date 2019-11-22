var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var db = mongoose.connection;
var bodyParser = require('body-parser');

const register = require('./CRUD/create')
const retrieveAll = require('./CRUD/retrieveAll')
const update = require('./CRUD/update')
const remove = require('./CRUD/remove')

mongoose.connect('mongodb://localhost:27017/pn_form', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  	console.log("we're connected")
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  	res.sendFile(__dirname + '/index.html');
});

app.post('/register', function (req, res) {
	register.register(req, res);
})

app.get('/retrieve'), (req, res) => {
	retrieveAll.retrieveAll(req, res);
}

app.put('/update', (req, res) => {
	update.update(req.body.name, res);
})

app.delete('/applicant', (req, res) => {
	remove.remove(req, res);
})

app.use(express.static('scripts'));

http.listen(port, function () {
  	console.log('listening on *: ' + port);
});