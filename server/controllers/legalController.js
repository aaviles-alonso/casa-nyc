const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

exports.getAll = (req, res) => {
    knex("legal")
        .select(
            "id",
            "name",
            "address",
            "phone",
            "zipcode",
            "link",
        )
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(`Error retreiving legal service provider ${err}`)
        );
};

exports.getSingle = (req, res) => {
    knex("legal")
        .select(
            "id",
            "name",
            "address",
            "phone",
            "zipcode",
            "link",
        )
        .where({ id: req.params.id })
        .then((data) => {
            if (!data.length) {
                return res
                    .status(404)
                    .send(`Record with id: ${req.params.id} is not found`);
            }
            res.status(200).json(data[0]);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving legal service provider ${req.params.id} ${err}`)
        );
};

exports.getAllFromGivenLegal = (req, res) => {
    knex("legal")
        .select("id")
        .then((data) => {
            const dataArr = data.map((item) => item.id);
            //check for if warehouse id is valid
            if (!dataArr.includes(req.params.id)) {
                return res.status(400).send("Legal service provider does not exist");
            } else {
                res.status(200).json(data);
            }
        })
        .catch((err) =>
            res
                .status(400)
                .send(
                    `Error retrieving information for Legal Service Provider ${req.params.id} ${err}`
                )
        );
};

exports.post = (req, res) => {
    const newLegal = { ...req.body, id: randomUUID() };

    knex("legal")
        .insert(newLegal)
        .then((data) => {
            //mysql does not send res back about post status
            res.status(201).json(newOrganization);
        })
        .catch((err) => res.status(400).send(`Error creating Organization: ${err}`));
};

exports.put = (req, res) => {
    //posting to db
    knex("legal")
        .where({ id: req.params.id })
        .update(req.body)
        .then((data) => {
            //data is 1 if found if 0 not found.
            if (data == 0) {
                return res
                    .status(404)
                    .send(`Legal service provider with id: ${req.params.id} is not found`);
            }
            //new query to find and return obj w id
            knex("legal")
                .where({ id: req.params.id })
                .then((data) => {
                    res.status(200).json(data[0]);
                });
        })
        .catch((err) => {
            res.status(400).send(`Error updating Legal service provider ${req.params.id} ${err}`);
        });
};

exports.del = (req, res) => {
    knex("legal")
        .where({ id: req.params.id })
        .del()
        .then((data) => {
            if (data == 0) {
                return res
                    .status(404)
                    .send(`Legal service provider with id: ${req.params.id} is not found`);
            }
            res.status(204).send(`Legal service provider with id: ${req.params.id} is deleted`);
        })
        .catch((err) =>
            res.status(400).send(`Error deleting Legal service provider ${req.params.id} ${err}`)
        );
};
