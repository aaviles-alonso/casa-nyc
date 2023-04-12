const knex = require("knex")(require("../knexfile"));

const validateEducation = (req, res, next) => {
    //check for empty inputs
    if (
        // !req.body.id ||
        !req.body.name ||
        !req.body.address ||
        !req.body.phone ||
        // !req.body.zipcode ||
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

// knex("education")
//     .select("id")
//     .then((data) => {
//         const dataArr = data.map((item) => item.id);
//         // check if id is valid
//         if (!dataArr.includes(req.body.id)) {
//             return res.status(400).send("Education resource does not exist");
//         } else {
//             next();
//         }

//     });
module.exports = validateEducation;
