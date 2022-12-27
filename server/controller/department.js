const department = require("../models/departmentSchema");

module.exports.adddepartment = async function adddepartment(req, res) {
  try {
    const { dep_id, name, comp_id } = req.body;
    // console.log("request coming", req.body);

    const result = new department({
      name: name,
      dep_id: dep_id,
      comp_id: comp_id,
    });
    if (result) {
      await result.save();
      return res.json({
        message: "department added successfully",
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

module.exports.getdepartment = async function getdepartment(req, res) {
  try {
    // console.log(req.body);
    let result = await department.find({ comp_id: req.body.id });
    // console.log("res ", result);

    if (result) {
      return res.json({
        message: " department data get successfully",
        data: result,
      });
    } else {
      return res.json({
        message: " department data not found",
      });
    }
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
};

module.exports.deletedepartment = async function deletedepartment(req, res) {
  try {
    // console.log(req.body);
    let result = await department.findByIdAndDelete({ _id: req.body.id });
    // console.log("res ", result);

    if (result) {
      return res.json({
        message: " department data get deleted successfully",
        data: result,
      });
    } else {
      return res.json({
        message: " department data not found",
      });
    }
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
};
