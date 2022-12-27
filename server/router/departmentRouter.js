const express = require("express");

const {
  getdepartment,
  adddepartment,
  deletedepartment,
} = require("../controller/department");

const departmentapp = express.Router();

departmentapp.route("/adddepartment").post(adddepartment);
departmentapp.route("/getdepartment").post(getdepartment);
departmentapp.route("/deletedepartment").post(deletedepartment);

module.exports = departmentapp;
