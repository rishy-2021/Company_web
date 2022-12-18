const mongoose = require("mongoose");

const url =
  "mongodb+srv://Rishy:N4BUh4CS2FDveVin@cluster0.sxw1v.mongodb.net/Company?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {})
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};
