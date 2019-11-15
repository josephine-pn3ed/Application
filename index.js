var app = require('express')();
var express = require('express');
var http = require('http').createServer(app);
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var db = mongoose.connection;
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

app.get('/', function (req, res) {
  	res.sendFile(__dirname + '/index.html');
});

app.post('/register', function (req, res) {
	let test = async function () {
      	let data = {
        	name: ,
		   	birthdate: {type:String, required: true},
		   	address: {
		      	sitio_and_barangay: {type:String, required: true},
		      	city_or_municipality: {type:String, required: true},
		      	province: {type:String, required:true}
		   	},
		   	contact_information1: {
		      	number: Number,
		      	owner: String
		   	},
		   	contact_information2: {
		      	number: Number,
		      	owner: String
		   	},
		   	email_address: String,
		   	facebook_account: String,
		   	track_enrolled: [String],
		   	computer_class: String,
		   	computer_knowledge: String,
		   	computer_skills: [String],
		   	organization: String,
		   	family_background: {
		      	siblings: Number,
		      	rank: Number,
		      	father: {
		         	name: String,
		         	income: Number
		      	},
		      	mother: {
		         	name: String,
		         	income: Number
		      	},
		      	parents_situation: String
		   	},
		   	motivation: String
      	}
      	await event.addEvent(data);
      	let item = await event.getLastEvent();
      	res.send(item)
    }
  	test();
})

app.use(express.static('styles'));

http.listen(port, function () {
  	console.log('listening on *: ' + port);
});