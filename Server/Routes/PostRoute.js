import express from "express";
import { createPost, getPost } from "../Controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);

export default router;

// 1:33:00
