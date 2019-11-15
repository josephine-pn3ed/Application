var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var db = mongoose.connection;
var bodyParser = require('body-parser');
var student_info = require('./schema/student_info')

mongoose.connect('mongodb://localhost:27017/pn_registration', {useNewUrlParser: true, useUnifiedTopology: true});
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
	console.log(req.body);
	let test = async function () {
      	let data = {
        	name: req.body.name,
		   	birthdate: req.body.birthdate,
		   	address: {
		      	sitio_and_barangay: req.body.sitio_and_barangay,
		      	city_or_municipality: req.body.city_or_municipality,
		      	province: req.body.province
		   	},
		   	contact_information1: {
		      	number: req.body.number1,
		      	owner: req.body.owner1
		   	},
		   	contact_information2: {
		      	number: req.body.number2,
		      	owner: req.body.owner2
		   	},
		   	email_address: req.body.email_address,
			   	highschool_background: {
			   		name : req.body.highschool,
				},
		   	organization: req.body.organization,
		   	family_background: {
		      	siblings: req.body.siblings,
		      	rank: req.body.rank,
		      	father: {
		         	name: req.body.fathername,
		         	income: req.body.fatherincome
		      	},
		      	mother: {
		         	name: req.body.mothername,
		         	income: req.body.motherincome
		      	}
		   	},
		   	motivation: req.body.motivation
      	}
      	await student_info.addStudent(data);
      	let last = await student_info.getLastStudent();
      	res.send(last)
    }
  	test();
})

app.use(express.static('scripts'));

http.listen(port, function () {
  	console.log('listening on *: ' + port);
});