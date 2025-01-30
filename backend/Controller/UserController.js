import { UserModel } from "../UserModel/UserModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import nodemailer from "nodemailer"
// Signup Route
export const Signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Send a success response
        res.status(201).json({ 
            message: 'User registered successfully!', 
            user: { id: newUser._id, username: newUser.username, email: newUser.email }
        });
    } catch (error) {
        // Send an error response with detailed information
        res.status(500).json({ message: 'Error during signup', error: error.message });
    }
};


// Login Route
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password are required.' });
        }

        // Find the user
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid email or password.' });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, message: 'Invalid email or password.' });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' } // Token expires in 1 day
        );

        // Send token as HTTP-only cookie for security
        res.cookie("token", token, {
            httpOnly: true, // Prevents JavaScript access (XSS protection)
            secure: process.env.NODE_ENV === "production", // Only HTTPS in production
            sameSite: "Strict", // CSRF protection
        });

        res.status(200).json({ success: true, message: 'Login successful!', token });
    } catch (error) {
        console.error("Login Error:", error.message);
        res.status(500).json({ success: false, message: 'Error during login', error: error.message });
    }
};

export const Logout = (req, res) => {
    res
      .clearCookie("token", {
      })
      .status(200)
      .json({ success: true, message: "Logged out successfully." });
  };
 