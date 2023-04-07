const express = require("express");
const router = express.Router();

const validateOrganization = require("../middlewares/validateOrganizations");
const organizationController = require("../controllers/organizationController");

router.get("/organizations", organizationController.getAll);

router.post("/organizations", validateOrganization, organizationController.post);

router.put("/organizations", validateOrganization, organizationController.put);

router.delete("/organizations", organizationController.del);







module.exports = router;
