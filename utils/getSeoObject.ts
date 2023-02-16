import { get } from "lodash";

const getSeoObject = (props: any) => {
  const title = undefined;
  const description = get(props, "search_description");
  const image = undefined;
  const locale = get(props, "locale");

  return {
    title,
    description,
    image,
    locale,
  };
};

export { getSeoObject };
