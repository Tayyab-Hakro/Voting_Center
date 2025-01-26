import mongoose, { Mongoose } from "mongoose";


const VotingSchema = new mongoose.Schema({
    UserId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    userDetails:{
        type:Array,
        default:[]
    },

})

export const VoteingModel = mongoose.model("Votindata" ,VotingSchema)