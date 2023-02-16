import { useSetting } from "@/hooks";
import { NextSeo, NextSeoProps } from "next-seo";
import { useMemo } from "react";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  locale?: string;
  company?: string;
  settingImage?: string;
  defaultNextSeo?: NextSeoProps;
};

const SEO = (props: SEOProps) => {
  const setting = useSetting();

  const {
    title,
    description,
    locale,
    defaultNextSeo,
    image,
    // company,
    settingImage,
  } = props;
  const { favicon, company } = setting;

  const headTitle =
    title == undefined ? undefined : `${title} Cadera Systems LLC`;

  return (
    <NextSeo
      title={company}
      description={company}
      openGraph={{
        title: company,
        description: company,
        site_name: company,
        locale: locale ?? "vi",
        images: [
          {
            url: image || favicon,
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
// <NextSeo
//   title={headTitle || company || "Cadera Systems LLC"}
//   description={description || ""}
//   openGraph={{
//     title: headTitle || company || "CADERA SYSTEMS LLC",
//     description: description || "",
//     site_name: company || "CADERA SYSTEMS LLC",
//     locale: locale ?? "vi",
//     images: [
//       {
//         url: image || og_image,
//         alt: headTitle,
//         type: "image/jpeg",
//       },
//     ],
//   }}
//   additionalLinkTags={[
//     {
//       rel: "icon",
//       href: favicon || "/fav.png",
//     },
//     {
//       rel: "apple-touch-icon",
//       href: favicon || "/fav.png",
//     },
//   ]}
//   {...defaultNextSeo}
// />
