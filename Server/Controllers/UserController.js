import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

// get a user
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findById({ _id: id });
    if (user) {
      const { password, ...rest } = user._doc;
      return res.status(200).json(rest);
    } else {
      return res.status(404).send("User not found!");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// update a user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus, password } = req.body;
  try {
    if (id === currentUserId || currentUserAdminStatus) {
      if (password) {
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(password, salt);
      }
      const user = await userModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } else {
      return res.status(401).json({
        message: "Unauthorized! You can only update your own account!",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  try {
    if (id === currentUserId || currentUserAdminStatus) {
      await userModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "User has been deleted!" });
    } else {
      return res.status(401).json({
        message: "Unauthorized! You can only delete your own account!",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Follow a user
export const followUser = async (req, res) => {
  // get the user id from the url
  const id = req.params.id;
  // get the user id from the request body which is the current user
  const { currentUserId } = req.body;
  try {
    if (id !== currentUserId) {
      const user = await userModel.findById(id);
      const currentUser = await userModel.findById(currentUserId);
      if (!user.followers.includes(currentUserId)) {
        // add current user to user's followers
        await user.updateOne({ $push: { followers: currentUserId } });
        // add user to current user's following
        await currentUser.updateOne({ $push: { following: id } });
        res.status(200).json("User has been followed!");
      } else {
        res.status(403).json("You already follow this user!");
      }
    } else {
      res.status(403).json("You can't follow yourself!");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Unfollow a user
export const unFollowUser = async (req, res) => {
  // get the user id from the url
  const id = req.params.id;
  // get the user id from the request body which is the current user
  const { currentUserId } = req.body;
  try {
    if (id !== currentUserId) {
      const user = await userModel.findById(id);
      const currentUser = await userModel.findById(currentUserId);
      if (user.followers.includes(currentUserId)) {
        // add current user to user's followers
        await user.updateOne({ $pull: { followers: currentUserId } });
        // add user to current user's following
        await currentUser.updateOne({ $pull: { following: id } });
        res.status(200).json("User has been unfollowed!");
      } else {
        res.status(403).json("You already unfollow this user!");
      }
    } else {
      res.status(403).json("You can't follow yourself!");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
