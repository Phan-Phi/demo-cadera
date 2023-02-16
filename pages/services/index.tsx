import React from "react";
import { GetServerSidePropsContext } from "next";

import { Services } from "@/containers";

import { transformUrl } from "@/utils";
import prefetchData from "@/libs/prefetchData";
import { PAGES_API, TYPE_PARAMS } from "@/apis";
import { ServicesProps } from "@/containers/Services/Services";

export default function index(props: ServicesProps) {
  return <Services {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const listingServicePage = transformUrl(PAGES_API, {
      type: TYPE_PARAMS["service.ServiceListingPage"],
      fields: "*",
      locale,
    });

    const detailServicePage = transformUrl(PAGES_API, {
      type: TYPE_PARAMS["service.ServiceDetailPage"],
      fields: "*",
      locale,
    });

    const urls = [listingServicePage, detailServicePage];

    const { resList, fallback } = await prefetchData(urls, {
      locale,
    });

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
