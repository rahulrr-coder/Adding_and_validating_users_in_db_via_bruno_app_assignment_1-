const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerUser = async (req,res)=>{
    try {
        const {username,email,password} = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({message:"All fields are required"});
        }

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({message:"User already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const user = new User({
            username,
            email,
            password:hashedPassword
        });

        res.status(201).json({message:"User registered successfully",
        user});
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server error"});

    }
module exports = {
    registerUser
};
