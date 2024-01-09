import { login, register } from "../controllers/userControler";
const router = require("express").Router();
router.post("/login", login);
router.post("/register", register);
