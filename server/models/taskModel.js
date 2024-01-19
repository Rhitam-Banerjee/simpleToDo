const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    task: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: false,
      },
      date: {
        type: Date,
        required: true,
      },
      list: {
        type: String,
        required: true,
      },
      isComplete: {
        tyoe: Boolean,
        required: true,
      },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Task", taskSchema);
