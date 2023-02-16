import { useSetting } from "@/hooks";
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

  const { title, description, locale, defaultNextSeo, image } = props;
  const { favicon, company, og_image } = setting;

  const headTitle =
    title == undefined ? undefined : `${title} Cadera Systems LLC`;

  const renderNextSeo = useMemo(() => {
    console.log("sadasdasdasd", setting.og_image);
    return (
      <NextSeo
        title={headTitle || company}
        description={description || ""}
        openGraph={{
          title: headTitle || company,
          description: description || "",
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
  }, [og_image]);

  return <>{renderNextSeo}</>;
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
