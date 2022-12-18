const express = require("express");

const { getdepartment, adddepartment } = require("../controller/department");

const departmentapp = express.Router();

departmentapp.route("/adddepartment").post(adddepartment);
departmentapp.route("/getdepartment").post(getdepartment);

module.exports = departmentapp;
