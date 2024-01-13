const Task = require("../models/taskModel");
const User = require("../models/userModel");
module.exports.getTask = async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await User.findOne({ username });
  } catch (err) {
    next(err);
  }
};
