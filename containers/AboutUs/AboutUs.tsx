import React from "react";
import { get } from "lodash";
import { useMeasure } from "react-use";
import { Container } from "@mui/material";

import LogoModel from "./components/LogoModel";
import ContentAbout from "./components/ContentAbout";
import { Box, Headline, SEO, Spacing, WrapperSection } from "@/components";

import { AboutPage, IPage, responseSchema } from "@/interfaces";
import { getSeoObject } from "@/utils";

export type AboutUsProps = IPage<[responseSchema<AboutPage>]>;

export default function AboutUs(props: AboutUsProps) {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const data = get(props, "initData[0].items[0]");

  const { title, sub_title, body } = data;
  const metaSeo = get(data, "meta");

  return (
    <Container>
      <WrapperSection>
        {/* <SEO {...getSeoObject(metaSeo)} /> */}

        <Headline title={title} subTitle={sub_title} />

        <Spacing spacing={3} />

        <Box ref={ref} height={width / 2}>
          <LogoModel />
        </Box>

        <ContentAbout body={body} />
      </WrapperSection>
    </Container>
  );
}
