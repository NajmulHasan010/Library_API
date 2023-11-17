import express from "express";
import { getAllStudent, getSingleStudent, createStudent, updateStudent, deleteStudent } from "../controllers/studentController.js";
import { verifyToken } from "../middlewares/verifyToken.js";


// init router
const router = express.Router();

//middleware
router.use(verifyToken);

// routes
router.get("/", getAllStudent);
router.get("/:id", getSingleStudent);
router.post("/", createStudent);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);


// default export router
export default router;