const express = require("express");
const router = express.Router();

const validateOrganization = require("../middlewares/validateOrganizations");
const organizationController = require("../controllers/organizationController");

router.get("/organizations", warehouseController.getAll);

router.post("/organizations", validateOrganization, organizationController.post);

router.put("/organizations", validateOrganization, organizationController.put);







module.exports = router;
