import React from "react";
import { useMeasure } from "react-use";

import { ROUTES } from "@/routes";
import { Image, Link, Box } from "@/components";
import { SERVICE_ITEM_RATIO } from "@/constants";
import { ServicesDetailPage } from "@/interfaces";
import { Typography } from "@mui/material";

const ServiceItem = (props: ServicesDetailPage) => {
  const { avatar, title, id, short_desc } = props;
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  return (
    <Box ref={ref}>
      <Link href={`/${ROUTES.SERVICES}/${id}`}>
        <Image
          src={avatar}
          alt={title}
          width={width}
          height={width / SERVICE_ITEM_RATIO}
        />
      </Link>
      <Typography textAlign="center" component="p" variant="caption2Bold">
        {short_desc}
      </Typography>
    </Box>
  );
};

export default ServiceItem;
