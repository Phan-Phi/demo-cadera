import { get } from "lodash";

const getSeoObject = (props: any, setting: any) => {
  // console.log("🚀 ~ file: getSeoObject.ts:4 ~ getSeoObject ~ setting", setting);
  const title = "asdasdasdasdasdasdsaads";
  const description = get(props, "search_description");
  const image = undefined;
  const locale = get(props, "locale");
  const company1111 = "1";

  return {
    title,
    description,
    image,
    locale,
    company1111,
  };
};

export { getSeoObject };
