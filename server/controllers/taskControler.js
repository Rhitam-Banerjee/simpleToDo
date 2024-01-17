const Task = require("../models/taskModel");
module.exports.getTask = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const { task } = await Task.find({ userId: userId });
    console.log(task);
  } catch (err) {
    next(err);
  }
};
module.exports.addTask = async (req, res, next) => {
  try {
    const { task, userId } = req.body;
  } catch (err) {
    next(err);
  }
};
