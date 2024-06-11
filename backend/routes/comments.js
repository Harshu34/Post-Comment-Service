// routes/comments.js
const express = require("express");
const router = express.Router();
const Comment = require("../models/Comment");
const Post = require("../models/Post");

router.post("/api/comments", async (req, res) => {
  try {
    const { content, postId } = req.body;

    // Ensure the post exists
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Create the comment
    const comment = new Comment({
      content,
      postId,
    });

    await comment.save();

    // Add comment to the post's comments array
    post.comments.push(comment);
    await post.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
