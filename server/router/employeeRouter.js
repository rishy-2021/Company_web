const express = require("express");
const {
  getemployees,
  addemployee,
  deleteemployees,
} = require("../controller/employee");

const employeeapp = express.Router();

employeeapp.route("/addemployee").post(addemployee);
employeeapp.route("/getemployees").post(getemployees);
employeeapp.route("/deleteemployees").post(deleteemployees);

module.exports = employeeapp;
