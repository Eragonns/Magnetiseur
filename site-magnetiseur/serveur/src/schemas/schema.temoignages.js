import { z } from "zod";

const TemoignagesBodySchema = z.object({
  firstName: z.string().trim().min(3, { message: "Le prénom est requis" }),
  city: z.string().trim().min(3, { message: "La ville est requise" }),
  message: z.string().trim().min(5, { message: "Le message est requis" })
});

export default TemoignagesBodySchema;
