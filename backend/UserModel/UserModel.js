// Import Mongoose
import mongoose from "mongoose";

// Define User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true 
    },
    password: { type: String, required: true },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Export the model
export const UserModel = mongoose.model('User', userSchema);
