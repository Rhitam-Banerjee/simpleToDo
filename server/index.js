const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const socketio = require("socket.io");
const cors = require("cors");
const app = express();
dotenv.config();
// app.use(
//   cors({
//     origin: "https://simpleto-do.vercel.app",
//     methods: ["POST", "GET"],
//   })
// );
app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.log(err);
  });
app.listen(process.env.PORT, () => {
  console.log(`Running on port : ${process.env.PORT}`);
});
