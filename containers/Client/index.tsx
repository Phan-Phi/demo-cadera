import React, { useMemo } from "react";
import { Container, Grid } from "@mui/material";
import { get } from "lodash";

import { WrapperSection, Headline, SEO } from "@/components";
import CardItem from "@/containers/Client/Components/CardItem";
import { client } from "@/interfaces/responseSchema/client";
import { IPage, responseSchema } from "@/interfaces";
import { useFetch } from "@/hooks";
import { PAGES_API, TYPE_PARAMS } from "@/apis";
import { getSeoObject } from "@/utils";

export type ClientPageProps = IPage<
  [responseSchema<client>, responseSchema<client>]
>;

const CLIENT_NEXT_API = `${PAGES_API}?fields=%2A&limit=20&offset=20&type=${TYPE_PARAMS["client.ClientDetailPage"]}`;

const Client = (props: ClientPageProps) => {
  const { initData } = props;
  const { rawData } = useFetch(CLIENT_NEXT_API);

  const metaSEO = get(props, "initData[1].items[0].meta");

  const listClients = get(initData[0], "items").concat(
    get(rawData, "items", []) as Array<client>
  );

  const renderItem = useMemo(() => {
    if (typeof listClients === "undefined") return null;

    return listClients.map((item: client, index: number) => (
      <Grid item xs={6} lg={3} sm={3} key={index}>
        <CardItem item={item} />
      </Grid>
    ));
  }, [listClients]);

  return (
    <Container>
      {/* <SEO {...getSeoObject(metaSEO)} /> */}

      <WrapperSection>
        <Headline
          title={"Our Clients"}
          subTitle={"Companies who have worked with us"}
          marginBottom={5}
        />

        <Grid container spacing={4}>
          {renderItem}
        </Grid>
      </WrapperSection>
    </Container>
  );
};

export default Client;
