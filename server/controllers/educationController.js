const knex = require("knex")(require("../knexfile"));
const { randomUUID } = require("crypto");

exports.getAll = (req, res) => {
    knex("education")
        .select(
            "id",
            "name",
            "address",
            "phone",
            "zipcode",
            "description",
            "class_type",
            "link",
        )
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send(`Error retreiving legal service provider ${err}`)
        );
};

exports.getSingle = (req, res) => {
    knex("education")
        .select(
            "id",
            "name",
            "address",
            "phone",
            "zipcode",
            "description",
            "class_type",
            "link",
        )
        .where('languages', 'like', '%' + req.params.class_type)
        .then((data) => {
            if (!data.length) {
                return res
                    .status(404)
                    .send(`Record with id: ${req.params.class_type} is not found`);
            }
            res.status(200).json(data[0]);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving education resource ${req.params.class_type} ${err}`)
        );
};

exports.getAllFromGivenEducation = (req, res) => {
    knex("education")
        .select("id",
            "name",
            "languages",
            "address",
            "phone",
            "zipcode",
            "description",
            "link",)
        .where('class_type', 'like', '%' + req.params.class_type)

        .then((data) => {
            const dataArr = data.map((education) => education.class_type);
            //check for if warehouse id is valid
            if (!dataArr.includes(req.params.class_type)) {
                return res.status(400).send("Education resource does not exist");
            } else {
                res.status(200).json(data);
            }
        })
        .catch((err) =>
            res
                .status(400)
                .send(
                    `Error retrieving information for Education resource ${req.params.class_type} ${err}`
                )
        );
};

exports.post = (req, res) => {
    const newEducation = { ...req.body, id: randomUUID() };

    knex("education")
        .insert(newEducation)
        .then((data) => {
            //mysql does not send res back about post status
            res.status(201).json(newEducation);
        })
        .catch((err) => res.status(400).send(`Error creating Organization: ${err}`));
};

exports.put = (req, res) => {
    //posting to db
    knex("education")
        .where({ id: req.params.id })
        .update(req.body)
        .then((data) => {
            //data is 1 if found if 0 not found.
            if (data == 0) {
                return res
                    .status(404)
                    .send(`Education resource with id: ${req.params.id} is not found`);
            }
            //new query to find and return obj w id
            knex("education")
                .where({ id: req.params.id })
                .then((data) => {
                    res.status(200).json(data[0]);
                });
        })
        .catch((err) => {
            res.status(400).send(`Error updating Education resource ${req.params.id} ${err}`);
        });
};

exports.del = (req, res) => {
    knex("education")
        .where({ id: req.params.id })
        .del()
        .then((data) => {
            if (data == 0) {
                return res
                    .status(404)
                    .send(`Education resource with id: ${req.params.id} is not found`);
            }
            res.status(204).send(`Education resource with id: ${req.params.id} is deleted`);
        })
        .catch((err) =>
            res.status(400).send(`Error deleting Education resource ${req.params.id} ${err}`)
        );
};
