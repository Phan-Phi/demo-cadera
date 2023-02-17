import { get } from "lodash";
import { Fragment, useEffect, useMemo, useState } from "react";

import {
  HomeType,
  IPage,
  responseSchema,
  ServicesDetailPage,
} from "@/interfaces";

import { SEO } from "@/components";
import { getSeoObject } from "@/utils";
import HomeBanner from "./components/HomeBanner";
import HomeContent from "./components/HomeContent";
import HomeContact from "./components/HomeContact";
import HomeService from "./components/HomeService";
import { useSetting } from "@/hooks";
import { useUpdateEffect } from "react-use";

export type HomePageProps = IPage<
  [responseSchema<HomeType>, responseSchema<ServicesDetailPage>]
>;

export default function Home(props: HomePageProps) {
  const dataServiceDetail = get(props, "initData[1].items");
  const dataHomePage = get(props, "initData[0].items[0]");
  const metaSeo = get(dataHomePage, "meta");
  console.log("🚀 ~ file: Home.tsx:28 ~ Home ~ metaSeo", metaSeo);

  return (
    <Fragment>
      <SEO {...getSeoObject(metaSeo)} />
      <HomeBanner data={dataHomePage} />

      <HomeContent data={dataHomePage} />

      <HomeService dataListing={dataHomePage} dataDetail={dataServiceDetail} />

      <HomeContact data={dataHomePage} />
    </Fragment>
  );
}
