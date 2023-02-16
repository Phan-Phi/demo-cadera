import React from "react";
import Contact, { ContactPageProps } from "@/containers/Contact";
import { GetServerSidePropsContext } from "next";
import { transformUrl } from "@/utils";
import { PAGES_API, TYPE_PARAMS } from "@/apis";
import prefetchData from "@/libs/prefetchData";

const contact = (props: ContactPageProps) => {
  return <Contact {...props} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["contact.ContactPage"],
        fields: "*",
        locale,
      }),
    ];

    const { resList, fallback } = await prefetchData(urls, {
      locale,
    });

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}

export default contact;
