const Task = require("../models/taskModel");
module.exports.getTask = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const [...tasks] = await Task.find({ userId });
    console.log([...tasks]);
  } catch (err) {
    next(err);
  }
};
module.exports.addTask = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
