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
   highschool_background: {
      name : String,
   },
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
      }
   },
   motivation: String
});

Schema.statics.addStudent = async function (student){
   var Person = new this(student);
   var result =  await Person.save(student);
   return result;
}

Schema.statics.getLastStudent = async function () {
   return await this.findOne().sort({_id:-1}).limit(1);
}

module.exports = mongoose.model('student_info', Schema);