import { StatusCodes } from "http-status-codes";

import * as temoignagesService from "../../services/temoignages.service.js";
import formatToUpperCaseWithHyphens from "../../utils/upperCase.util.js";

const submitTemoignagesForm = async (req, res, next) => {
  let { firstName, city, message } = req.body;
  firstName = formatToUpperCaseWithHyphens(firstName);
  city = formatToUpperCaseWithHyphens(city);
  try {
    const newTemoignages = await temoignagesService.createTemoignages({
      firstName,
      city,
      message
    });
    res.status(StatusCodes.CREATED).json({ temoignages: newTemoignages });
  } catch (error) {
    console.error("Erreur lors de l'envoie du temoignage : ", error);
    next(error);
  }
};

const getAllTemoignages = async (_req, res, next) => {
  try {
    const temoignages = await temoignagesService.getAll();
    res.status(StatusCodes.OK).json({ temoignages });
  } catch (error) {
    next(error);
  }
};

export { submitTemoignagesForm, getAllTemoignages };
