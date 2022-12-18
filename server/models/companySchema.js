const moongoose = require("mongoose");

const CompSchema = new moongoose.Schema({
  name: String,
  address: String,
  regNum: String,
  workingDays: String,
});

module.exports = moongoose.model("company", CompSchema);
