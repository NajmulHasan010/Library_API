import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import { mongodbConnection } from "./config/mongodb.js";
import booksRouter from "./routes/bookRoute.js"
import categoryRouter from "./routes/categoryRoute.js"
import authRouter from "./routes/authRoute.js"
import studentRouter from "./routes/studentRoute.js"



// environment variable
dotenv.config();
const port = process.env.PORT || 6060;

// init express
const app = express();

// use express midddleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app router
app.use(booksRouter);
app.use(categoryRouter);
app.use(authRouter);
app.use(studentRouter);

//error handler


// listen port
app.listen(port, () => {
    mongodbConnection();
    console.log(`running on port ${port}` .bgBlue.black);
});