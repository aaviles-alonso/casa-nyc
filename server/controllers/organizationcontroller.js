const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

exports.getAll = (req, res) => {
    knex("organization")
        .select(
            "id",
            "name",
            "languages",
            "address",
            "phone",
            "zipcode",
            "description",
            "link",
        )
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(`Error retreiving organization ${err}`)
        );
};

exports.getAllFromGivenWarehouse = (req, res) => {
    knex("organization")
        .select("id")
        .then((data) => {
            const dataArr = data.map((item) => item.id);
            //check for if warehouse id is valid
            if (!dataArr.includes(req.params.id)) {
                return res.status(400).send("Organization does not exist");
            } else {
                res.status(200).json(data);
            }
        })
        .catch((err) =>
            res
                .status(400)
                .send(
                    `Error retrieving information for Organizations ${req.params.id} ${err}`
                )
        );
};

exports.post = (req, res) => {
    const newOrganization = { ...req.body, id: randomUUID() };

    knex("organizations")
        .insert(newWarehouse)
        .then((data) => {
            //mysql does not send res back about post status
            res.status(201).json(newOrganization);
        })
        .catch((err) => res.status(400).send(`Error creating Organization: ${err}`));
};

exports.put = (req, res) => {
    //posting to db
    knex("organizations")
        .where({ id: req.params.id })
        .update(req.body)
        .then((data) => {
            //data is 1 if found if 0 not found.
            if (data == 0) {
                return res
                    .status(404)
                    .send(`Organization with id: ${req.params.id} is not found`);
            }
            //new query to find and return obj w id
            knex("organizations")
                .where({ id: req.params.id })
                .then((data) => {
                    res.status(200).json(data[0]);
                });
        })
        .catch((err) => {
            res.status(400).send(`Error updating Organization ${req.params.id} ${err}`);
        });
};

exports.del = (req, res) => {
    knex("organizations")
        .where({ id: req.params.id })
        .del()
        .then((data) => {
            if (data == 0) {
                return res
                    .status(404)
                    .send(`Organization with id: ${req.params.id} is not found`);
            }
            res.status(204).send(`Organization with id: ${req.params.id} is deleted`);
        })
        .catch((err) =>
            res.status(400).send(`Error deleting Organization ${req.params.id} ${err}`)
        );
};
