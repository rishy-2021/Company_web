const moongoose = require("mongoose");

const employeeSchema = new moongoose.Schema({
  name: String,
  address: String,
  exp: String,
  salery: String,
  dep_id: String,
});

module.exports = moongoose.model("employees", employeeSchema);
