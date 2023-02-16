import { array, InferType, number, object, string } from "yup";
import { BLOCK_TYPE_SLIDE, META_ITEM } from "./utils";

export let UserSchema = object({
  body_banner: string().required(),

  slide_banners: array(BLOCK_TYPE_SLIDE).required(),
  id: number().required(),
  image_banner: string().required(),
  last_published_at: string().required(),
  meta: META_ITEM,
  sub_title_banner: string().required(),
  sub_title_contact: string().required(),
  sub_title_service: string().required(),
  title: string().required(),
  title_banner: string().required(),
  title_contact: string().required(),
  title_service: string().required(),
});

export type HomeType = InferType<typeof UserSchema>;
