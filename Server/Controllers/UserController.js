import userModel from "../Models/userModel.js";

// get a user
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findById({ _id: id });
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("User not found!");
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// 51:31
