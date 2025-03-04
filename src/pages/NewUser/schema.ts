import { z } from "zod";

const requiredField = "Campo obrigatório";

export const NewRegistrationSchema = z.object({
  name: z
    .string({ required_error: requiredField })
    .min(2, { message: "O nome deve ter pelo menos dois caracteres." })
    .refine((val) => /^[^\d]/.test(val), {
      message: "A primeira letra do nome não pode ser um número.",
    })
    .refine((val) => val.trim().split(" ").length > 1, {
      message: "O nome deve ser completo.",
    }),
  email: z
    .string({ required_error: requiredField })
    .min(1, { message: requiredField })
    .email({ message: "Email inválido" }),
  cpf: z.string().min(11, "CPF inválido"),
  admissionDate: z
    .string()
    .min(1, "A data é obrigatória")
    .transform((val) => new Date(val)),
});

export type NewRegistrationFormData = z.infer<typeof NewRegistrationSchema>;
