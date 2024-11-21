import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    password : {
        type: String,
        required: true,
    },
    number : {
        type: String
    },
}, {timestamps:true});

export const DUser = mongoose.model("DecorUsers", userSchema);