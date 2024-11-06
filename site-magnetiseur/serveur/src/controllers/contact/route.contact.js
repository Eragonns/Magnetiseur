import express from "express";
import * as contactController from "./controller.contact.js";

const router = express.Router();
router.post("/send-email", contactController.sendEmail);

export default router;
