import { SETTING_API } from "@/apis";
import { useFetch, useSetting } from "@/hooks";
import { SETTING_ITEM } from "@/interfaces";
import { NextSeo, NextSeoProps } from "next-seo";
import { useMemo } from "react";
import useSWR from "swr";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  locale?: string;
};

const SEO = (props: SEOProps) => {
  const setting = useSetting();

  const { title, description, locale, image } = props;
  const { favicon, company, og_image, address } = setting;

  const headTitle = title == undefined ? undefined : title;
  // const demo = headTitle || company;

  return (
    <NextSeo
      title={address}
      description={description || ""}
      openGraph={{
        title: address,
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
    />
  );
};

export default SEO;
