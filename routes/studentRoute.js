import express from "express";
import { getAllStudent, getSingleStudent, createStudent, updateStudent, deleteStudent } from "../controllers/studentController.js";


// init router
const router = express.Router();

// routes
router.get("/api/v1/student", getAllStudent);
router.get("/api/v1/student/:id", getSingleStudent);
router.post("/api/v1/student", createStudent);
router.patch("/api/v1/student/:id", updateStudent);
router.delete("/api/v1/student/:id", deleteStudent);


// default export router
export default router;