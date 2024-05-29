const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;
const hobbyRoute = require("./routes/hobbies");
const app = express();

app.use(cors());

app.use(express.json());

//add routes
app.use("/hobbies", hobbyRoute);

// app.use("/videoImage", express.static("./public/images"));

app.listen(PORT, () => {
  console.log("Your server is working on port " + PORT);
});
