const express = require("express");
const router = express.Router();

const validateLegal = require("../middlewares/validateLegal");
const legalController = require("../controllers/legalController");

router.get("/", legalController.getAll);

router.get("/:zipcode", legalController.getAllFromGivenLegal)

router.post("/", validateLegal, legalController.post);

router.put("/", validateLegal, legalController.put);

router.delete("/", legalController.del);

module.exports = router;