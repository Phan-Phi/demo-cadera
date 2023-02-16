import React from "react";
import { get } from "lodash";
import { useMedia } from "@/hooks";

import { Container } from "@mui/material";
import SectionTitle from "./components/SectionTitle";
import OtherServices from "./components/OtherServices";
import { SEO, Spacing, WrapperSection } from "@/components";
import ContentServicesDetail from "./components/ContentServicesDetail";

import { IPage, responseSchema, ServicesDetailPage } from "@/interfaces";
import { getSeoObject } from "@/utils";

export type ServiceDetailProps = IPage<
  [ServicesDetailPage, responseSchema<ServicesDetailPage>]
>;

export default function ServicesDetail(props: ServiceDetailProps) {
  const { isMdDown } = useMedia();

  const dataDetail = get(props, "initData[0]");
  const otherServices = get(props, "initData[1].items");

  const { title, short_desc, body, meta } = dataDetail;
  return (
    <WrapperSection>
      {/* <SEO {...getSeoObject(meta)} /> */}

      <Container>
        <SectionTitle short_desc={short_desc} title={title} />

        <Spacing spacing={5} />

        <ContentServicesDetail body={body} />
      </Container>

      <Spacing spacing={10} />

      <OtherServices data={otherServices} />
    </WrapperSection>
  );
}
