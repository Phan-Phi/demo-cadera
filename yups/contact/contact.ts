import { InferType, number, object, string } from "yup";
import { META_ITEM } from "@/interfaces/responseSchema/utils";

const contactSchema = object({
  id: number().required(),
  image: string().required(),
  last_published_at: string().required(),
  meta: META_ITEM,
  sub_title: string().required(),
  title: string().required(),
});

export type contact = InferType<typeof contactSchema>;
