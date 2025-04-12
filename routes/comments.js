const express = require("express");
const Comment = require("../models/Comment");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/:postId", authMiddleware, async (req, res) => {
  const { content } = req.body;
  const { postId } = req.params;

  try {
    const comment = new Comment({
      content,
      postId,
      author: req.userId,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
