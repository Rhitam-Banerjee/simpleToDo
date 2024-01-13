const User = require("../models/userModel");
const bcrypt = require("bcrypt");
module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    console.log(user._id.toString());
    if (!user) return res.json({ msg: "Username not found", status: false });
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid)
      return res.json({ msg: "Invalid password", status: false });
    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err);
  }
};
module.exports.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const userCheck = await User.findOne({ username });
    if (userCheck) return res.json({ msg: "Username exists", status: false });
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashPassword,
    });
    delete password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err);
  }
};
