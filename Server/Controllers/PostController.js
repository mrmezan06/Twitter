import postModel from "../Models/postModel.js";
import userModel from "../Models/userModel.js";
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

// Get all post by user._id
export const getPostByUser = async (req, res) => {
  try {
    const posts = await postModel.find({ userId: req.params.uid });
    res.status(200).json(posts);
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

// Like/Dislike a post
export const likePost = async (req, res) => {
  try {
    const post = await postModel.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a timeline post
export const getTimelinePosts = async (req, res) => {
  try {
    const currentUser = await userModel.findById(req.params.id);
    const userPosts = await postModel.find({ userId: currentUser._id });
    const friendPosts = await Promise.all(
      currentUser.following.map((friendId) => {
        return postModel.find({ userId: friendId });
      })
    );
    res.json(
      userPosts.concat(...friendPosts).sort((a, b) => b.createdAt - a.createdAt)
    );
    // Latest post will be on top
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Back-End End
