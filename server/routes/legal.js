const express = require("express");
const router = express.Router();

const validateLegal = require("../middlewares/validateLegal");
const legalController = require("../controllers/legalController");

router.get("/resources/legal", legalController.getAll);

router.post("/resources/legal", validateLegal, legalController.post);

router.put("/resources/legal", validateLegal, legalController.put);

router.delete("/resources/legal", legalController.del);

module.exports = router;