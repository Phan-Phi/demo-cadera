import { SETTING_API } from "@/apis";
import { useFetch, useSetting } from "@/hooks";
import { SETTING_ITEM } from "@/interfaces";
import { NextSeo, NextSeoProps } from "next-seo";
import { useMemo } from "react";
import useSWR from "swr";

interface SEOProps extends NextSeoProps {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  company1111?: string;
  locale?: string;
}

const SEO = (props: SEOProps) => {
  const setting = useSetting();

  const { title, description, locale, image, company1111 } = props;
  console.log("🚀 ~ file: SEO.tsx:21 ~ SEO ~ company1111", company1111);
  const { favicon, company, og_image, address } = setting;

  const headTitle = title == undefined ? undefined : title;
  // const demo = headTitle || company;

  return (
    <NextSeo
      title={description}
      description={description || ""}
      openGraph={{
        title: description,
        description: company1111,
        site_name: company || company1111,
        locale: locale || "vi",
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
      {...props}
    />
  );
};

export default SEO;
