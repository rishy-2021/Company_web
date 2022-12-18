const department = require("../models/departmentSchema");

module.exports.adddepartment = async function adddepartment(req, res) {
  try {
    const { name, id, comp_id } = req.body;
    // console.log("request coming", req.body);

    const result = new department({
      name: name,
      id: id,
      comp_id: comp_id,
    });
    if (result) {
      await result.save();
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
