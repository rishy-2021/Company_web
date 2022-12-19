const employee = require("../models/employeeSchema");

module.exports.addemployee = async function addemployee(req, res) {
  try {
    const { name, address, exp, salery, dep_id } = req.body;
    console.log("request employee coming");

    const result = new employee({
      name: name,
      address: address,
      exp: exp,
      salery: salery,
      dep_id: dep_id,
    });
    if (result) {
      await result.save();
      return res.json({
        message: "company added successfully",
        data: result,
      });
    } else {
      return res.json({
        message: "data not found",
      });
    }
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
};

module.exports.getemployees = async function getemployees(req, res) {
  try {
    let result = await employee.find({ dep_id: req.body.dep_id });
    // console.log("res ", result);

    if (result) {
      return res.json({
        message: " employee data get successfully",
        data: result,
      });
    } else {
      return res.json({
        message: " employee data not found",
      });
    }
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
};
