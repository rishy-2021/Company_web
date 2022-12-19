const company = require("../models/companySchema");

module.exports.addCompany = async function addCompany(req, res) {
  try {
    const { name, address, regNo, wd } = req.body;
    // console.log("request coming", req.body);

    const result = new company({
      name: name,
      address: address,
      regNum: regNo,
      workingDays: wd,
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

module.exports.getCompany = async function getCompany(req, res) {
  try {
    let result = await company.find();
    // console.log("res ", result);

    if (result) {
      return res.json({
        message: " Company data get successfully",
        data: result,
      });
    } else {
      return res.json({
        message: " Company data not found",
      });
    }
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
};
