const express = require("express");
const router = express.Router();

const validateEducation = require("../middlewares/validateEducation");
const educationController = require("../controllers/educationController");

router.get("/resources/education", educationController.getAll);

router.put("/resources/education", validateEducation, educationController.put);

router.post("/resources/education", validateEducation, educationController.post);

router.delete("/resources/education", educationController.del)

module.exports = router;