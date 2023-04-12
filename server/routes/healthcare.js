const express = require("express");
const router = express.Router();

const validateHealthcare = require("../middlewares/validateHealthcare");
const healthcareController = require("../controllers/healthcareController");

router.get("/", healthcareController.getAll);
router.get("/:borough", healthcareController.getSingle)

router.post("/", validateHealthcare, healthcareController.post);

router.put("/", validateHealthcare, healthcareController.put);

router.delete("/", healthcareController.del);







module.exports = router;
