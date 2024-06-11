const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log("Creating post:", title, content); // Debugging statement
    const post = new Post({ title, content });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error("Error creating post:", err); // Debugging statement
    res.status(400).json({ error: err.message });
  }
};

// backend/controllers/postController.js
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('comments');
        console.log('Fetched Posts:', posts); // Debugging statement
        res.status(200).json(posts);
    } catch (err) {
        console.error('Error fetching posts:', err); // Debugging statement
        res.status(400).json({ error: err.message });
    }
};

