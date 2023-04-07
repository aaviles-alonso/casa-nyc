const express = require("express");
const router = express.Router();

const validateHealthcare = require("../middlewares/validateHealthcare");
const healthcareController = require("../controllers/healthcareController");

router.get("/resources/healthcare", healthcareController.getAll);

router.post("/resources/healthcare", validateHealthcare, healthcareController.post);

router.put("/resources/healthcare", validateHealthcare, healthcareController.put);

router.delete("/resources/healthcare", healthcareController.del);







module.exports = router;
