import React, { useMemo } from "react";

import { Container, styled } from "@mui/material";
import { Headline, SEO, Stack, WrapperSection } from "@/components";
import { get } from "lodash";

import Form from "./components/ContactForm";
import Map from "./components/Map";
import Heading from "./components/Heading";
import { IPage, responseSchema } from "@/interfaces";
import { useMedia, useSetting } from "@/hooks";
import { getSeoObject } from "@/utils";
import { contact } from "@/yups/contact";

export type ContactPageProps = IPage<[responseSchema<contact>]>;

const Contact = (props: ContactPageProps) => {
  const { initData } = props;

  const { isSmDown } = useMedia();
  const setting = useSetting();

  const item = get(...initData, "items[0]");
  const metaSeo = get(props, "initData[0].items[0].meta");

  const settingItem = get(initData[0], "items[0]");

  const { title, sub_title } = settingItem;

  return (
    <Container>
      {/* <SEO {...getSeoObject(metaSeo)} /> */}
      <WrapperSection>
        <Stack spacing={5}>
          <StyledHeadLine title={title} subTitle={sub_title} />

          <Stack
            direction={isSmDown ? "column-reverse" : "row"}
            justifyContent={"center"}
            spacing={4}
          >
            {/* map */}
            <Stack spacing={1} width={"100%"}>
              <Map item={settingItem} setting={setting} />
            </Stack>

            {/* form */}
            <Stack spacing={2} width={"100%"}>
              <Heading title={"SEND US A MESSAGE"} />
              <Form />
            </Stack>
          </Stack>
        </Stack>
      </WrapperSection>
    </Container>
  );
};

const StyledHeadLine = styled(Headline)(() => {
  return {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  };
});

export default Contact;
