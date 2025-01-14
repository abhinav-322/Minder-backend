const connecTtoMongo = require("./db");
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

connecTtoMongo();

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.static("profileImages"));

app.use(express.json());

//Available routes
app.use("/api/auth", require("./routes/auth")); // For all authentication related end points
app.use("/api/profile", require("./routes/profile")); // To create and modify user profile data

app.listen(port, () => {
  console.log(`Minder app is listening on port ${port}`);
});
