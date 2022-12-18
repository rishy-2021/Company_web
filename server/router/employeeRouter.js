const express = require("express");
const { getemployees, addemployee } = require("../controller/employee");

const employeeapp = express.Router();

employeeapp.route("/addemployee").post(addemployee);
employeeapp.route("/getemployees").post(getemployees);

module.exports = employeeapp;
