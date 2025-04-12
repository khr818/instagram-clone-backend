const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    caption: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
