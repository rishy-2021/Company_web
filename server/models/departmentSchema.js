const moongoose = require("mongoose");

const DepartSchema = new moongoose.Schema({
  name: String,
  id: String,
  comp_id: String,
});

module.exports = moongoose.model("departments", DepartSchema);
