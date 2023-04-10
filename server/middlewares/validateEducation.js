const knex = require("knex")(require("../knexfile"));

const validateEducation = (res, res, next) => {
    //check for empty inputs
    if (
        !req.body.id ||
        !req.body.name ||
        !req.body.address ||
        !req.body.phone ||
        !req.body.zipcode ||
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
        !req.body.contact_phone.length == 14

    ) {
        return res
            .status(400)
            .send("Please make sure to provide correct phone number.");
    }
    next();
};