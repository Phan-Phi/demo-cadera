import React, { useMemo } from "react";

import { get } from "lodash";

import { Container, Grid } from "@mui/material";

import { Headline, SEO, Spacing, WrapperSection } from "@/components";
import { CarouselService, ServiceItem } from "@/compositions";

import {
  IPage,
  responseSchema,
  ServiceListingPage,
  ServicesDetailPage,
} from "@/interfaces";
import { getSeoObject } from "@/utils";

export type ServicesProps = IPage<
  [responseSchema<ServiceListingPage>, responseSchema<ServicesDetailPage>]
>;

export default function Services(props: ServicesProps) {
  const data = get(props, "initData");

  const { title, sub_title, meta } = data[0].items[0];

  const listService = data[1].items;

  const metaSEO = meta;

  const renderSlider = useMemo(() => {
    if (listService == undefined) return null;

    return listService.map((item) => {
      return <ServiceItem key={item.id} {...item} />;
    });
  }, [listService]);

  return (
    <WrapperSection>
      <SEO {...getSeoObject(metaSEO)} />

      <Headline title={title} subTitle={sub_title} />

      <Spacing spacing={2} />

      <Grid container>
        <Grid item xs={12}>
          <CarouselService>{renderSlider}</CarouselService>
        </Grid>
      </Grid>
    </WrapperSection>
  );
}
