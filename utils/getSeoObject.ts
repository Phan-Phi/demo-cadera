import { get } from "lodash";
const getSeoObject = (props: any) => {
  const title = get(props, "metaSeo.title");
  const description = get(props, "metaSeo.search_description");
  const image = get(props, "metaSeo.og_image");
  const locale = get(props, "locale");

  return {
    title,
    description,
    image,
    locale,
  };
};

export { getSeoObject };
