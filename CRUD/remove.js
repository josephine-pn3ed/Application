const applicant = require('../model/applicant')

let remove = (req, res) => {
    let test = async function () {
        await applicant.removeApplicant(req)
        res.status(200).json({
            message : "Applicant is successfully removed!"
        })
    }
}

module.exports = {remove}