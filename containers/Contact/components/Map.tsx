import React, { Fragment } from "react";
import { useMeasure } from "react-use";

import { Box, Image } from "@/components";
import { SETTING_ITEM } from "@/interfaces";
import { contact } from "@/yups/contact";
import ContactInfo from "@/components/ContactInfo";
import { Typography, useTheme } from "@mui/material";
import { useSetting } from "@/hooks";

interface mapProps {
  item: contact;
  setting: SETTING_ITEM;
}

const Map = (props: mapProps) => {
  const { item } = props;
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const { company } = useSetting();
  const theme = useTheme();

  return (
    <Fragment>
      <Box ref={ref}>
        <Image
          src={item.image}
          width={width}
          height={width}
          objectFit={"cover"}
        />
      </Box>

      <Typography variant="body1Bold" color={theme.palette.primary.main}>
        {company}
      </Typography>

      <ContactInfo />
    </Fragment>
  );
};

export default Map;
