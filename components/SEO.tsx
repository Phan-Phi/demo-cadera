import { useFetch, useSetting } from "@/hooks";
import { NextSeo, NextSeoProps } from "next-seo";
import { useEffect, useMemo, useState } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  locale?: string;
  company?: string;
  defaultNextSeo?: NextSeoProps;
};

const SEO = (props: SEOProps) => {
  const setting = useSetting();

  // const { rawData } = useFetch("https://cadera.t-solution.vn/api/v2/");
  // console.log("🚀 ~ file: SEO.tsx:22 ~ SEO ~ rawData", rawData);

  const { title, description, locale, defaultNextSeo, image, company } = props;
  const { favicon, og_image, address } = setting;

  const headTitle = title == undefined ? undefined : title;
  // const demo = headTitle || company;

  return (
    <NextSeo
      title={address}
      description={description || ""}
      openGraph={{
        title: company,
        description: company,
        site_name: company,
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
