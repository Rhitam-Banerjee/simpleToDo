const { getTask } = require("../controllers/taskControler");
const router = require("express").Router();
router.post("/getTask/", getTask);
