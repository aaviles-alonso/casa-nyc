const express = require("express");
const router = express.Router();

const validateOrganization = require("../middlewares/validateOrganizations");
const organizationController = require("../controllers/organizationController");

router.get("/", organizationController.getAll);

// router.get("/:languages", organizationController.getSingle)

router.get("/:languages", organizationController.getAllFromGivenOrganization)

router.post("/", validateOrganization, organizationController.post);

router.put("/", validateOrganization, organizationController.put);

router.delete("/", organizationController.del);







module.exports = router;
