const express = require("express");
const companyapp = require("./companyRouter");
const departmentapp = require("./departmentRouter");
const employeeapp = require("./employeeRouter");

const app = express.Router();

app.use("/company", companyapp);
app.use("/department", departmentapp);
app.use("/employee", employeeapp);

module.exports = app;
