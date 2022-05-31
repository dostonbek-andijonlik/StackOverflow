const mongoose = require("mongoose");

const url =
  "mongodb+srv://stack:stack123@stackoverflow.cejah.mongodb.net/?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url)
    .then((res) => console.log("MongoDB is successfully connected"))
    .catch((err) => console.log("Error: ", err));
};
