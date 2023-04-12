const knex = require("knex")(require("../knexfile"));

const validateEducation = (req, res, next) => {
    //check for empty inputs
    if (
        !req.body.name ||
        !req.body.address ||
        !req.body.phone ||
        !req.body.description ||
        !req.body.class_type ||
        !req.body.link
    ) {
        return res
            .status(400)
            .send(
                "Please make sure to provide all the information in the fields in a request"
            );
    }

    //check for number format
    if (
        !req.body.phone.length == 14

    ) {
        return res
            .status(400)
            .send("Please make sure to provide correct phone number.");
    }
    next();
};


module.exports = validateEducation;
