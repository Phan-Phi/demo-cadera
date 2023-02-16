import { get } from "lodash";
const getSeoObject = (props: any) => {
  const title = get(props, "metaSeo.title");
  const description = get(props, "metaSeo.search_description");

  const image = undefined;
  const locale = get(props, "locale");
  // const companyaaaaa = get(setting, "hotline");

  return {
    title,
    description,
    image,
    locale,
    // companyaaaaa,
  };
};

export { getSeoObject };
