import express from "express";
import { loginLibrary, logoutLibrary } from "../controllers/authController.js";


// init router
const router = express.Router();

// routes
router.post("/login", loginLibrary);
router.post("/logout", logoutLibrary);

// default export router
export default router;