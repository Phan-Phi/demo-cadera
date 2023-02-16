import { yupResolver } from "@hookform/resolvers/yup";
import { InferType, object, string } from "yup";
import { validatePhoneNumber } from "@/interfaces/responseSchema/utils";

const contactFormSchema = object().shape({
  name: string().required(),
  company: string().required(),
  email: string().required().email(),
  phone_number: validatePhoneNumber().required(),
  message: string().required(),
});

export const wrapperContactFormSchema = yupResolver(contactFormSchema);

export type contactForm = InferType<typeof contactFormSchema>;
