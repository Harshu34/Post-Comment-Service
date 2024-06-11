const express = require("express");
const { createPost, getPosts } = require("../controllers/postController");
const router = express.Router();

router.post("/posts", createPost);
router.get("/posts", getPosts);

module.exports = router;
