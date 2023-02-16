import { useSetting } from "@/hooks";
import { NextSeo, NextSeoProps } from "next-seo";

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

  return (
    <NextSeo
      title={headTitle || company || "Cadera Systems LLCaaaaa"}
      description={description || ""}
      openGraph={{
        title: headTitle || company || "CADERA SYSTEMS LLCaaaaaaa",
        description: description || "",
        site_name: company || "CADERA SYSTEMS LLCaaaa",
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
