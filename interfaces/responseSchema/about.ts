import { get } from "lodash";
import { object, number, string, array, InferType, lazy } from "yup";
import {
  BLOCK_TYPE_CONTENT,
  BLOCK_TYPE_EMBED,
  BLOCK_TYPE_SLIDE,
  META_ITEM,
} from "./utils";

export let aboutPageSchema = object({
  id: number().required().positive().integer(),
  meta: META_ITEM,
  title: string().required(),
  last_published_at: string().required(),
  sub_title: string().required(),
  image_banner: string().required(),
  body: array().of(
    lazy((data) => {
      const blockType = get(data, "block_type");
      if (blockType === "embed") {
        return BLOCK_TYPE_EMBED;
      }

      if (blockType === "slide") {
        return BLOCK_TYPE_SLIDE;
      }

      return BLOCK_TYPE_CONTENT;
    })
  ),
});

export type AboutPage = InferType<typeof aboutPageSchema>;
