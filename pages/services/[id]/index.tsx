import React from "react";
import { GetServerSidePropsContext } from "next";

import { ServicesDetail } from "@/containers";
import { ServiceDetailProps } from "@/containers/Services/ServicesDetail";

import { transformUrl } from "@/utils";
import prefetchData from "@/libs/prefetchData";
import { PAGES_API, TYPE_PARAMS } from "@/apis";

export default function index(props: ServiceDetailProps) {
  return <ServicesDetail {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale, query } = context;
    const urls = [
      transformUrl(`${PAGES_API}${query.id}`, {
        fields: "*",
        locale,
      }),
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["service.ServiceDetailPage"],
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
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
