const applicant = require('../model/applicant')

let register = (req, res) => {
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
                name: req.body.highschool,
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
        await applicant.addApplicant(data);
        res.status(200).json({
            message : "Successfully registered!"
        })
    }
    test();
}

module.export = {register}