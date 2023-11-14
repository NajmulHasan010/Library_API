import express from "express";
import { loginLibrary, logoutLibrary } from "../controllers/authController.js";


// init router
const router = express.Router();

// routes
router.post("/api/v1/login", loginLibrary);
router.post("/api/v1/logout", logoutLibrary);

// default export router
export default router;