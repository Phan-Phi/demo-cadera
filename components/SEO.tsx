import { SETTING_API } from "@/apis";
import { useFetch, useSetting } from "@/hooks";
import { SETTING_ITEM } from "@/interfaces";
import { Typography } from "@mui/material";
import { NextSeo, NextSeoProps } from "next-seo";
import { useCallback, useMemo } from "react";
import useSWR from "swr";

interface SEOProps extends NextSeoProps {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  companyaaaaa?: string;
  locale?: string;
}

const SEO = (props: any) => {
  const setting = useSetting();

  const { title, description, locale, image, companyaaaaa } = props;
  const { favicon, company, og_image, address } = setting;

  const headTitle = title == undefined ? undefined : title;
  // const demo = headTitle || company;

  const rendersss = useMemo(() => {
    return <DemoNextSeo value1={setting} value2={props} />;
  }, [setting]);

  return <>{rendersss}</>;
};

const DemoNextSeo = (props: any) => {
  console.log(
    "🚀 ~ file: SEO.tsx:35 ~ DemoNextSeo ~ props",
    props.value1.company
  );

  return (
    <NextSeo
      title={props.value1.company}
      description={props.value1.company || ""}
      openGraph={{
        title: props.value1.company,
        description: props.value1.company,
        site_name: props.value1.company || props.value1.company,
        locale: "vi",
        images: [
          {
            url: "",
            alt: props.value1.company,
            type: "image/jpeg",
          },
        ],
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/fav.png",
        },
        {
          rel: "apple-touch-icon",
          href: "/fav.png",
        },
      ]}
      {...props}
    />
  );
};

export default SEO;
