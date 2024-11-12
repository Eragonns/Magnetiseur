import express from "express";
import * as temoignagesController from "./controller.temoignages.js";
import TemoignagesBodySchema from "../../schemas/schema.temoignages.js";
import validate from "../../middlewares/validation.middleware.js";

const router = express.Router();

router.post(
  "/temoignages",
  validate({ bodySchema: TemoignagesBodySchema }),
  temoignagesController.submitTemoignagesForm
);

router.get("/temoignages", temoignagesController.getAllTemoignages);

export default router;
