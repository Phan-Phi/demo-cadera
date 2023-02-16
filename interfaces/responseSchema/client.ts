import { object, string, number, boolean, array, InferType } from "yup";
import { META_ITEM } from "./utils";

const metaParent = object({
  id: number().required(),
  meta: object({
    detail_url: string().required(),
    html_url: string().nullable().required(),
    type: string().required(),
  }),
  title: string().required(),
});

const meta = object({
  canonical_url: string().nullable().required(),
  detail_url: string().required(),
  first_published_at: string().required(),
  locale: string().required(),
  og_image: string().nullable().required(),
  parent: array(metaParent),
  search_description: string(),
  seo_title: string().required(),
  show_in_menus: boolean().required(),
  slug: string().required(),
  type: string().required(),
  url_path: string().required(),
  title: string().required(),
});

const clientSchema = object({
  avatar: string().required(),
  id: number().required(),
  last_published_at: string().required(),
  link: string().required(),
  meta: META_ITEM,
  title: string().required(),
});

export type client = InferType<typeof clientSchema>;
