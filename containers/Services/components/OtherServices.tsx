import { useRouter } from "next/router";
import React, { Fragment, useMemo } from "react";

import { Grid } from "@mui/material";

import { Headline, Spacing } from "@/components";
import { CarouselService, ServiceItem } from "@/compositions";

import { ServicesDetailPage } from "@/interfaces";

type OtherServicesProps = {
  data: ServicesDetailPage[];
};

export default function OtherServices(props: OtherServicesProps) {
  const { data } = props;
  const router = useRouter();

  const renderSliderOtherServices = useMemo(() => {
    const dataServices = data.filter(
      (item) => item.id.toString() != router.query.id
    );

    return dataServices.map((item) => {
      return <ServiceItem key={item.id} {...item} />;
    });
  }, [data]);

  return (
    <Fragment>
      <Headline title="Other Services" />

      <Spacing spacing={5} />

      <Grid container>
        <Grid item xs={12}>
          <CarouselService>{renderSliderOtherServices}</CarouselService>
        </Grid>
      </Grid>
    </Fragment>
  );
}
