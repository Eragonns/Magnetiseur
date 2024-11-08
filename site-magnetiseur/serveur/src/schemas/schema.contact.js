import { z } from "zod";

const phoneSchema = z
  .string()
  .refine(
    (value) => {
      if (value === "") return true;

      const phoneRegex = /^\+?\d{10,14}$/;
      return phoneRegex.test(value);
    },
    {
      message: "Numéro de téléphone invalide."
    }
  )
  .optional();

const ContactBodySchema = z.object({
  firstName: z.string().trim().min(3, { message: "Le prénom est requis" }),
  lastName: z.string().min(3, { message: "Le nom est requis" }),
  email: z.string().email({ message: "Email invalide" }),
  number: phoneSchema,
  message: z.string().trim().min(5, { message: "Le message est requis" })
});

export default ContactBodySchema;
