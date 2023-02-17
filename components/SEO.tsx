import { SETTING_API } from "@/apis";
import { useFetch, useSetting } from "@/hooks";
import { SETTING_ITEM } from "@/interfaces";
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

  const rendersss = () => {
    console.log("asdasdasdadsas", company);
    return (
      <NextSeo
        title={company}
        description={company || ""}
        openGraph={{
          title: company,
          description: company,
          site_name: company || company,
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

  return <>{rendersss}</>;
};

export default SEO;
