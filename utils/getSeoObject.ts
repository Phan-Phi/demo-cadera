import { get } from "lodash";

const getSeoObject = (props: any) => {
  const title = undefined;
  const description = get(props, "search_description");
  const image = undefined;
  const locale = get(props, "locale");
  const demo111 = "asdasdasdasdasd";

  return {
    title,
    description,
    image,
    locale,
    demo111,
  };
};

export { getSeoObject };
