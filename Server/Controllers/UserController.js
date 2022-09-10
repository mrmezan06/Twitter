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

// 1:07:59
