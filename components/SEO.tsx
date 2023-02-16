import { useFetch, useSetting } from "@/hooks";
import { NextSeo, NextSeoProps } from "next-seo";
import { useEffect, useMemo, useState } from "react";

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

  const [data, setData] = useState<any>();
  console.log("🚀 ~ file: SEO.tsx:18 ~ SEO ~ data", data);

  useEffect(() => {
    setData(setting);
  }, [setting]);

  const { title, description, locale, defaultNextSeo, image } = props;
  const { favicon, company, og_image, address } = setting;

  const headTitle = title == undefined ? undefined : title;
  // const demo = headTitle || company;

  return (
    <NextSeo
      title={address}
      description={description || ""}
      openGraph={{
        title: company ? data.address : data.address,
        description: company ? data.address : data.address,
        site_name: company ? data.address : data.address,
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
