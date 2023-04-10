const express = require("express");
const router = express.Router();

const validateEducation = require("../middlewares/validateEducation");
const educationController = require("../controllers/educationController");

router.get("/resources/education", educationController.getAll);

router.post("/resources/education", validateEducation, educationController);

router.put("/resources/education", validateEducation, educationController);

router.delete("/resources/education", educationController.del)

