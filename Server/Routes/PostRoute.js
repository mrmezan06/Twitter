import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../Controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;

// 1:40:54
