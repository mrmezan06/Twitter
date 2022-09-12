import postModel from "../Models/postModel.js";
import mongoose from "mongoose";

// create a post
export const createPost = async (req, res) => {
  const newPost = new postModel(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a post
export const getPost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a post
export const updatePost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The post has been updated");
    } else {
      res.status(403).json("You can update only your post");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("The post has been deleted");
    } else {
      res.status(403).json("You can delete only your post");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
