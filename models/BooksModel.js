import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
            trim: true,
        },
        slug: {
            type: String,
            //require: true,
            trim: true,
        },
        writer: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            trim: true,
        },
        borrowed_by: {
            type: String,
            trim: true,
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
        timestamps : true
    }
);

export const Book = mongoose.model("book", bookSchema );