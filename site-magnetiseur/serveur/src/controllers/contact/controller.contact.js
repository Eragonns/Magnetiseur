import { StatusCodes } from "http-status-codes";
import { resend } from "../../config/resend.config.js";
import * as contactService from "../../services/service.contact.js";
import validatePhoneNumber from "../../utils/util.phoneNumber.js";

const sendEmail = async (req, res, next) => {
  const { firstName, name, email, number, message } = req.body;

  const isPhoneNumberValid = validatePhoneNumber(number, "FR");
  if (!isPhoneNumberValid) {
    return res.status(400).send("Numéro de téléphone invalide.");
  }

  const contactData = { firstName, name, email, number, message };

  try {
    const newContact = await contactService.create(contactData);

    if (!newContact) {
      throw new Error("Impossible de créer le contact.");
    }

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: "no-reply@domain.com", // Remplacez par une adresse email spécifique
      to: ["proprietaire@domain.com"], // Email du propriétaire
      subject: "Nouveau message de contact",
      text: `Prénom: ${firstName}\nNom: ${name}\nEmail: ${email}\nTéléphone: ${number}\nMessage: ${message}`
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res
      .status(StatusCodes.OK)
      .json({ message: "Email envoyé avec succès.", data });
  } catch (error) {
    console.error("Erreur lors de la soumission du formulaire :", error);
    next(error);
  }
};

export { sendEmail };
