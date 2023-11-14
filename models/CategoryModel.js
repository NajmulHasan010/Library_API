import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: true,
            trim: true,
        },
        slug: {
            type: String,
            //required: true,
            trim: true,
        },
        books: {
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
    { timestamps: true }
);
export const Category = mongoose.model("Category", categorySchema);