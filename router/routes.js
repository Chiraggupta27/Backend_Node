import express from "express";
import authController from "../controller/authController.js";
import authValidation from "../middleware/authValidation.js";

const router = express.Router();

router.post("/login", authValidation.authValidation, authController.login);
router.post("/signUp",authValidation.authValidation,authController.signUp);

export default router;
