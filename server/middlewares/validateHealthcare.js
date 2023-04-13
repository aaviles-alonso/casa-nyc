const knex = require("knex")(require("../knexfile"));

const validateHealthcare = (req, res, next) => {
    //check for empty inputs
    if (
        // !req.body.id ||
        !req.body.name ||
        !req.body.address ||
        !req.body.phone ||
        !req.body.borough
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


module.exports = validateHealthcare;
