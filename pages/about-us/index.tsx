import React from "react";
import { GetServerSidePropsContext } from "next";

import { AboutUs } from "@/containers";
import { AboutUsProps } from "@/containers/AboutUs/AboutUs";

import { transformUrl } from "@/utils";
import prefetchData from "@/libs/prefetchData";
import { PAGES_API, TYPE_PARAMS } from "@/apis";

export default function index(props: AboutUsProps) {
  return <AboutUs {...props} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const { locale } = context;

    const urls = [
      transformUrl(PAGES_API, {
        type: TYPE_PARAMS["about.AboutPage"],
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
