const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middleware/authentication");
const { upload } = require("../middleware/authentication");

const postController = require("../controllers/postController");

router.post(
  "/posts",
  authenticateToken,
  postController.createPost
);
router.get("/posts", authenticateToken, postController.getPosts);
router.get("/allposts", postController.getAllPosts);

module.exports = router;
