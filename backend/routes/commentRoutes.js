const express = require("express");
const {
  createComment,
  getComments,
} = require("../controllers/commentController");
const router = express.Router();

router.post("/comments", createComment);
router.get("/comments/:postId", getComments);

module.exports = router;
