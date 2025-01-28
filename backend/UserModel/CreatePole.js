import mongoose from "mongoose";

const PollingSchema = new mongoose.Schema({
    Title:{
        type:"String",
        required:true
    },
    Option1:{
        type:"String",
        required:true
    }, Option1:{
        type:"String",
        required:true
    }, Option3 :{
        type:String,
        required:true
    }
})

export const PollingModel = mongoose.model("CreatedPoll" , PollingSchema)