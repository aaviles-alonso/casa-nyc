const express = require("express");
const router = express.Router();

const validateLegal = require("../middlewares/validateEducation");
const legalController = require("../controllers/educationController");

router.get("/", legalController.getAll);

router.post("/", validateLegal, legalController.post);

router.put("/", validateLegal, legalController.put);

router.delete("/", legalController.del);

module.exports = router;