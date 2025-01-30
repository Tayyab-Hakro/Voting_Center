import mongoose from "mongoose";
import { VoteingModel } from "../UserModel/VoteModel.js";

export const CreateVoting = async (req, res) => {
    try {
        const { Title, Option1, Option2, Option3 } = req.body;

        // Fix: Ensure all fields are provided
        if (!Title || !Option1 || !Option2 || !Option3) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Create a new voting poll document
        const CreatePoll = new VoteingModel({
            Title,
            Option1,
            Option2,
            Option3
        });

        // Save the poll to the database
        await CreatePoll.save();

        // Send success response
        return res.json({ success: true, message: "Voting Model Saved" });

    } catch (error) {
        console.error(error);
        // Send error response
        res.status(500).json({ success: false, message: "Server error" });
    }
};
