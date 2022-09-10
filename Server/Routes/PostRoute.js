import express from "express";
import { createPost } from "../Controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);

export default router;

// 1:27:00
