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
  const setting = useSetting();
  const [demo, setDeme] = useState(setting);

  const dataServiceDetail = get(props, "initData[1].items");
  const dataHomePage = get(props, "initData[0].items[0]");
  const metaSeo = get(dataHomePage, "meta");
  const metaSeo1 = { metaSeo, ...setting };

  // const renderSEO = useMemo(() => {
  //   return <SEO {...getSeoObject(metaSeo, setting)} />;
  // }, [demo]);

  return (
    <Fragment>
      {/* {renderSEO} */}
      <SEO {...getSeoObject(metaSeo1)} />
      <HomeBanner data={dataHomePage} />

      <HomeContent data={dataHomePage} />

      <HomeService dataListing={dataHomePage} dataDetail={dataServiceDetail} />

      <HomeContact data={dataHomePage} />
    </Fragment>
  );
}
