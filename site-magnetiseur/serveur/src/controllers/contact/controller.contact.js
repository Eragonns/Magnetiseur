import { StatusCodes } from "http-status-codes";
import nodemailer from "nodemailer";

import { createContact } from "../../services/contact.service.js";

const submitContactForm = async (req, res, next) => {
  const { firstName, lastName, email, number, message } = req.body;

  try {
    const newContact = await createContact({
      firstName,
      lastName,
      email,
      number,
      message
    });
    const transporter = nodemailer.createTransport({
      host: "in-v3.mailjet.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailText = `
         Prénom: ${firstName}
         Nom: ${lastName}
         Email: ${email}
         ${number ? `Téléphone: ${number}` : ""}

         Message: ${message}
       `;

    const mailOptions = {
      from: "lecomtefranck18@gmail.com",
      to: email,
      replyTo: "lecomtefranck18@gmail.com",
      subject: `Nouveau message de ${firstName} ${lastName}`,
      text: mailText.trim(),
      html: `
       <p><strong>Prénom:</strong> ${firstName}</p>
       <p><strong>Nom:</strong> ${lastName}</p>
       <p><strong>Email:</strong> ${email}</p>
       ${number ? `<p><strong>Téléphone:</strong> ${number}</p>` : ""}
       <p><strong>Message:</strong> ${message}</p>
     `
    };

    await transporter.sendMail(mailOptions);

    res.status(StatusCodes.CREATED).json({ contact: newContact });
  } catch (error) {
    console.error("Erreur lors de l'envoie du mail :", error);
    next(error);
  }
};

export { submitContactForm };
