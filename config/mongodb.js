import colors from "colors";
import mongoose from "mongoose";

export const mongodbConnection = async () => {
    try {
        await mongoose.connect(`mongodb+srv://najmulhasanniaj:WvXiQ1ecmzENqJF0@mongodb-with-nodejs.hdvywpc.mongodb.net/library`);
        console.log(`mongodb connected successfully` .bgCyan.black);
    } catch (error) {
        console.log(`mongodb connection failed ${error.message}` .bgRed.black);
    }
};