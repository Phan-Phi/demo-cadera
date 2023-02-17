import { useSetting } from "@/hooks";
import { NextSeo, NextSeoProps } from "next-seo";

interface SEOProps extends NextSeoProps {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  locale?: string;
}

const SEO = (props: SEOProps) => {
  const setting = useSetting();

  const { title, description, locale, image } = props;
  const { favicon, company, og_image } = setting;

  const headTitle =
    title == undefined ? undefined : `${title} Cadera Systems LLC`;

  return (
    <NextSeo
      title={headTitle || company || "Cadera Systems LLC"}
      description={description || ""}
      openGraph={{
        title: headTitle || company || "CADERA SYSTEMS LLC",
        description: description || "",
        site_name: company || "CADERA SYSTEMS LLC",
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
          href: favicon,
        },
        {
          rel: "apple-touch-icon",
          href: favicon,
        },
      ]}
      {...props}
    />
  );
};

export default SEO;
