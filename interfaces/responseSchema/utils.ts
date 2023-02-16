import { boolean, InferType, number, object, string } from "yup";
import { isValidPhoneNumber, parsePhoneNumber } from "react-phone-number-input";

const BLOCK_TYPE_CONTENT = object({
  block_type: string().oneOf(["content"]).required(),
  value: string().required(),
});

const BLOCK_TYPE_EMBED = object({
  block_type: string().oneOf(["embed"]).required(),
  value: object({
    width: string().required(),
    height: string().required(),
    src: string().required(),
  }).required(),
});

const BLOCK_TYPE_SLIDE = object({
  block_type: string().oneOf(["slide"]).required(),
  value: object({
    description: string().required(),
    title: string().required(),
  }).required(),
});

const BLOCK_TYPE_EMAIL = object({
  block_type: string().oneOf(["email"]).required(),
  value: string().required(),
});

const META_ITEM = object({
  canonical_url: string().required(),
  detail_url: number().required(),
  first_published_at: string().required(),
  locale: string().required(),
  og_image: string().required(),
  parent: string().required(),
  search_description: string().required(),
  seo_title: string().required(),
  show_in_menus: boolean().required(),
  slug: string().required(),
  type: string().required(),
  url_path: string().required(),
});

export const validatePhoneNumber = () => {
  return string()
    .default("+1")
    .test({
      test: (value) => {
        if (value) {
          const phoneNumber = parsePhoneNumber(value);

          if (phoneNumber) {
            if (phoneNumber.country !== "US") return false;

            if (isValidPhoneNumber(phoneNumber.number)) {
              return true;
            } else {
              return false;
            }
          }

          return false;
        }

        return false;
      },
      message: "phone number is invalid",
    });
};

export const transformNumberNotEmpty = () => {
  return string().transform(function (value) {
    return value === "" ? "0" : value;
  });
};

export {
  BLOCK_TYPE_CONTENT,
  BLOCK_TYPE_EMBED,
  BLOCK_TYPE_SLIDE,
  META_ITEM,
  BLOCK_TYPE_EMAIL,
};
export type TypeMenuItem = InferType<typeof META_ITEM>;
