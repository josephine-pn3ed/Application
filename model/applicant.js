const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ApplicantSchema = new Schema({
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

ApplicantSchema.statics.addApplicant = async function (applicant){
   var Applicant = new this(applicant);
   var result =  await Applicant.save(applicant);
   return result;
}

ApplicantSchema.statics.getLastApplicant = async function () {
   return await this.findOne().sort({_id:-1}).limit(1);
}

ApplicantSchema.statics.getApplicants = async function () {
   return await this.find();
}

ApplicantSchema.statics.updateApplicant = async function (name) {
   return await this.updateOne({name : name}, {$set : {comment : "confirmed"}});
}

ApplicantSchema.statics.removeApplicant = async function (name) {
   return await this.deleteOne({name : name});
} 

module.exports = mongoose.model('Applicant', ApplicantSchema);