const User = require('../models/userModel');

const getUsers = async (req, res) => {
    const users = await User.find();
    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }
    res.json({
        status: "success",
        users
    });
};

const createUser = async (req, res) => {
    const user = new User(req.body);
    if(!user){
        return res.status(400).json({ message: "Invalid user data" });
    }
    await user.save();
    res.json({
        status: "success",
        message: "User created successfully",
        user
    });
};

const updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
};
const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: 'User Deleted' });
};

module.exports = { getUsers, createUser, updateUser, deleteUser }