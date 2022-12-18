const express = require("express");
const { addCompany, getCompany } = require("../controller/company");

const companyapp = express.Router();

companyapp.route("/addcompany").post(addCompany);
companyapp.route("/getcompany").get(getCompany);

module.exports = companyapp;
