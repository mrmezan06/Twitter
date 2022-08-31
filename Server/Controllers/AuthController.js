import userModel from "../Models/userModel.js";

export const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;
  const newUser = new userModel({
    username,
    password,
    firstname,
    lastname,
  });
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
