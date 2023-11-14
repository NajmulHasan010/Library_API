import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    studentName: {
        type: String,
        required: [true, "name feild is important"],
        trim: true, 
    },
    userName: {
        type: String,
        required: [true, "username feild is important"],
        trim: true, 
        unique: true,
    },
    email: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
    },
    borrowedBooks: {
        type: String,
        trim: true,
        default: null,
    },
    age: {
        type: Number,
        default: null,
    },
    location: {
        type: String,
        trim: true,
        default: null,
    },
    gender: {
        type: String,
        trim: true,
        enum: ["Male", "Female", "Custom"],
    },
    cell: {
        type: String,
        trim: true,
        default: null,
    },
    
    photo: {
        type: String,
        default: null,
    },
    status: {
        type: Boolean,
        default: true,
    },
    trash: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps: true,
}
);

//create customer models
export const Student = mongoose.model("student", studentSchema);