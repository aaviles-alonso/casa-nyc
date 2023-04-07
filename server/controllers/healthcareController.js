const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

exports.getAll = (req, res) => {
    knex("healthcare")
        .select(
            "id",
            "name",
            "address",
            "phone",
            "zipcode",
        )
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(`Error retreiving Healthcare Office ${err}`)
        );
};
exports.getSingle = (req, res) => {
    knex("healthcare")
        .select(
            "id",
            "name",
            "address",
            "phone",
            "zipcode",
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
            res.status(400).send(`Error retrieving Healthcare Office ${req.params.id} ${err}`)
        );
};

exports.getAllFromGivenHealthcare = (req, res) => {
    knex("healthcare")
        .select("id")
        .then((data) => {
            const dataArr = data.map((item) => item.id);
            //check for if warehouse id is valid
            if (!dataArr.includes(req.params.id)) {
                return res.status(400).send("Helathcare office does not exist");
            } else {
                res.status(200).json(data);
            }
        })
        .catch((err) =>
            res
                .status(400)
                .send(
                    `Error retrieving information for Healthcare Office ${req.params.id} ${err}`
                )
        );
};

exports.post = (req, res) => {
    const newHealthcare = { ...req.body, id: randomUUID() };

    knex("healthcare")
        .insert(newHealthcare)
        .then((data) => {
            //mysql does not send res back about post status
            res.status(201).json(newHealthcare);
        })
        .catch((err) => res.status(400).send(`Error creating Healthcare Office: ${err}`));
};

exports.put = (req, res) => {
    //posting to db
    knex("healthcare")
        .where({ id: req.params.id })
        .update(req.body)
        .then((data) => {
            //data is 1 if found if 0 not found.
            if (data == 0) {
                return res
                    .status(404)
                    .send(`Healthcare with id: ${req.params.id} is not found`);
            }
            //new query to find and return obj w id
            knex("healthcare")
                .where({ id: req.params.id })
                .then((data) => {
                    res.status(200).json(data[0]);
                });
        })
        .catch((err) => {
            res.status(400).send(`Error updating Healthcare Office ${req.params.id} ${err}`);
        });
};

exports.del = (req, res) => {
    knex("healthcare")
        .where({ id: req.params.id })
        .del()
        .then((data) => {
            if (data == 0) {
                return res
                    .status(404)
                    .send(`Healthcare Office with id: ${req.params.id} is not found`);
            }
            res.status(204).send(`Healthcare Office with id: ${req.params.id} is deleted`);
        })
        .catch((err) =>
            res.status(400).send(`Error deleting Healthcare Office ${req.params.id} ${err}`)
        );
};
