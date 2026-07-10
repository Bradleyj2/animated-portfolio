import { z } from 'zod'

export const ContactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().optional(),
  message: z.string().min(10, "Message is too short.").max(2000, "Message is too long."),
  consent: z.literal(true, { errorMap: () => ({ message: "Consent is required." }) })
})

export type ContactFormData = z.infer<typeof ContactSchema>