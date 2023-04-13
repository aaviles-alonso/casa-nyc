const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("knex")(require("./knexfile"));
require("dotenv").config();
const { PORT } = process.env;

const organizationsRoutes = require("./routes/organization");
const legalRoutes = require("./routes/legal");
const healthcareRoutes = require("./routes/healthcare");
const educationRoutes = require("./routes/education");

// using cors and json middleware
app.use(express.json());
app.use(cors());

// generic get
app.use("/api/organizations", organizationsRoutes);
app.use("/api/legal", legalRoutes);
app.use("/api/healthcare", healthcareRoutes);
app.use("/api/education", educationRoutes);

// listening
app.listen(PORT || 8080, () => {
    console.log("Listening");
});
