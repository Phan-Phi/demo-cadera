import { get } from "lodash";

const getSeoObject = (props: any, setting: any) => {
  const title = get(props, "seo_title");
  const description = get(props, "search_description");
  const image = undefined;
  const locale = get(props, "locale");
  const company = get(setting, "company");
  const settingImage = get(setting, "og_image");

  return {
    title,
    description,
    image,
    locale,
    company,
    settingImage,
  };
};

export { getSeoObject };
