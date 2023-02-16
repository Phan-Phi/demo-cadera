import { PAGES_API, TYPE_PARAMS } from "@/apis";
import Client, { ClientPageProps } from "@/containers/Client";
import prefetchData from "@/libs/prefetchData";
import { transformUrl } from "@/utils";
import { GetServerSidePropsContext } from "next";
import React from "react";

const client = (props: ClientPageProps) => {
  return <Client {...props} />;
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["client.ClientDetailPage"],
        fields: "*",
        locale,
      }),
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["client.ClientListingPage"],
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

export default client;
