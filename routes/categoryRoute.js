import express from "express";
import {createCategory} from "../controllers/categoryController.js";

// init router
const router = express.Router();

//routes
router.post("/api/v1/category", createCategory);

//default export router
export default router;
