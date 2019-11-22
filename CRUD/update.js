const applicant = require('../model/applicant')

let update = (req, res) => {
    let test = async function() {
        res.status(200).send(await applicant.updateApplicant(req))
    }
    test();
}

module.exports = {update}