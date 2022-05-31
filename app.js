const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
const router = require("./routes/index");
// const mongoose = require("mongoose");

//DB connection
db.connect();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//headers
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin");
  res.header("Access-Control-Allow-Headers");
  next();
});

//api

app.use("/api", router);

//static resources
// app.use(
//   "/upload",
//   express.static(path.join(__dirname, "../../../../../../../../"))
// );
// app.use(express.static(path.join(__dirname, "../../../../../../../../")));

// app.get("*", (req, res) => {
//   try {
//     res.sendFile(path.join(`${__dirname}../../`));
//   } catch (e) {
//     res.send("Oops error occured!");
//   }
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
