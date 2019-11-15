const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
   name: {type:String, required:true},
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
});

Schema.statics.addPerson = async function (person){
   var Person = new this(person);
   var result =  await Person.save(person);
   return result;
}

Schema.statics.findItem = async function (item) {
	return await this.findOne({"item": item});
}

Schema.statics.countItems = async function() {
	return this.countDocuments();
}

Schema.statics.getItems = async function() {
   return await this.find();
}

Schema.statics.deleteItem = async function (element) {
   return await this.deleteOne({"item" : element});
}

module.exports = mongoose.model('student_info', Schema);