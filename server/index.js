import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5713;
app.listen(PORT, () => {
  console.log("listening on Port " + PORT);
});
