import { z } from "zod";

const ContactBodySchema = z.object({
  firstName: z.string().trim().min(3, { message: "Le prénom est requis" }),
  name: z.string().trim().min(3, { message: "Le nom est requis" }),
  email: z.string().email({ message: "Email invalide" }),
  number: z.string().regex(/^(?:\+33|0)[67]\d{8}$|^(?:\+32|0)[4-9]\d{8}$/, {
    message:
      "Numéro de téléphone invalide. Format attendu : +32 478 12 34 56 (Belgique) ou +33 6 12 34 56 78 (France)"
  }),
  message: z.string().trim().min(5, { message: "Le message est requis" })
});

export default ContactBodySchema;
