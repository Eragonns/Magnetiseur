import express from "express";
import * as contactController from "./controller.contact.js";
import ContactBodySchema from "../../schemas/schema.contact.js";
import validate from "../../middlewares/validation.middleware.js";

const router = express.Router();

router.post(
  "/send-email",
  validate({ bodySchema: ContactBodySchema }),
  contactController.submitContactForm
);

export default router;
