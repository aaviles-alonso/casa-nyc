const express = require("express");
const router = express.Router();

const validateEducation = require("../middlewares/validateEducation");
const educationController = require("../controllers/educationController");

router.get("/", educationController.getAll);

router.put("/", validateEducation, educationController.put);

router.post("/", validateEducation, educationController.post);

router.delete("/", educationController.del)

module.exports = router;