import UserDetail from "../models/user.js";

//GET USERS
export const getUsers = async (req, res) => {
  try {
    const userDetails = await UserDetail.find();
    res.status(200).json(userDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//POST USER
export const userLogin = async (req, res) => {
  try {
    const userDetails = await UserDetail.find();
    res.status(200).json(userDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//CREATE USER
export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserDetail(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
