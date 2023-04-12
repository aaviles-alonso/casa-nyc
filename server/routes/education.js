const express = require("express");
const router = express.Router();

const validateEducation = require("../middlewares/validateEducation");
const educationController = require("../controllers/educationController");

router.get("/", educationController.getAll);

router.get("/:class_type", educationController.getSingle)

router.get("/:class_type", educationController.getAllFromGivenEducation)

router.put("/", validateEducation, educationController.put);

router.post("/", validateEducation, educationController.post);

router.delete("/", educationController.del)

module.exports = router;