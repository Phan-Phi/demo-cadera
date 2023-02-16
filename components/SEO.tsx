import { useFetch, useSetting } from "@/hooks";
import { NextSeo, NextSeoProps } from "next-seo";
import { useMemo } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  locale?: string;
  defaultNextSeo?: NextSeoProps;
};

const SEO = (props: SEOProps) => {
  const setting = useSetting();

  if (Object.entries(setting).length === 0) {
    return null;
  }

  // const { rawData } = useFetch("https://cadera.t-solution.vn/api/v2/");
  // console.log("🚀 ~ file: SEO.tsx:22 ~ SEO ~ rawData", rawData);

  const { title, description, locale, defaultNextSeo, image } = props;
  const { favicon, company, og_image } = setting;
  console.log("🚀 ~ file: SEO.tsx:29 ~ SEO ~ company", company);

  const headTitle =
    title == undefined ? undefined : `${title} Cadera Systems LLC`;
  const demo = headTitle || company;

  return (
    <NextSeo
      title={demo}
      description={description || ""}
      openGraph={{
        title: demo,
        description: demo,
        site_name: demo,
        locale: locale ?? "vi",
        images: [
          {
            url: image || og_image,
            alt: headTitle,
            type: "image/jpeg",
          },
        ],
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: favicon || "/fav.png",
        },
        {
          rel: "apple-touch-icon",
          href: favicon || "/fav.png",
        },
      ]}
      {...defaultNextSeo}
    />
  );
};

export default SEO;
