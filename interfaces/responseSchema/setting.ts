import { array, InferType, mixed, number, object, string } from "yup";
import { BLOCK_TYPE_EMAIL } from "./utils";

export let SettingSchema = object({
  id: number().required(),
  logo: string().required(),
  favicon: string().required(),
  og_image: string().required(),
  emails: array(BLOCK_TYPE_EMAIL),
  email_notifications: string().required(),
  company: string().required(),
  address: string().required(),
  hotline: string().required(),
  site: number().required(),
});
export type SETTING_ITEM = InferType<typeof SettingSchema>;
