const applicant = require('../model/applicant')

let retrieveAll = (req, res) => {
    let test = async function() {
        res.status(200).send(await applicant.getApplicants());
    }
    test();
}

module.exports = {retrieveAll}