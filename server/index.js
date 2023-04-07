const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("knex")(require("./knexfile"));
require("dotenv").config();
const { PORT } = process.env;

const organizationsRoutes = require("./routes/organization");


// using cors and json middleware
app.use(express.json());
app.use(cors());

// generic get
app.use("/api/organizations", organizationsRoutes);

// listening
app.listen(PORT || 8080, () => {
    console.log("are YOU listening?");
});
