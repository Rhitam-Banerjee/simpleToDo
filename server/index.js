const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const socketio = require("socket.io");
const cors = require("cors");
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });
app.listen(process.env.PORT, () => {
  console.log(`Running on port : ${process.env.PORT}`);
});
