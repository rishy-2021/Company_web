const mongoose = require("mongoose");

const url = "";

module.exports.connect = () => {
  mongoose
    .connect(url, {})
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
