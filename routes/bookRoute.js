import express from "express";
import {
	createBooks,
	getAllBooks,
	getSingleBooks,
	updateSingleBook,
	deleteSingleBook,
} from "../controllers/bookController.js";

// init router
const router = express.Router();

//routes
router.post("/api/v1/books", createBooks);
router.get("/api/v1/books", getAllBooks);
router.get("/api/v1/books/:id", getSingleBooks);
router.patch("/api/v1/books/:id", updateSingleBook);
router.delete("/api/v1/books/:id", deleteSingleBook);

//default export router
export default router;
