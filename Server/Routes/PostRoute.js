import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Post Route");
});

export default router;

// 1:27:00
