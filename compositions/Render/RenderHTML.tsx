import React from "react";
import { BoxProps, styled, Box } from "@mui/material";
import DOMPurify, { Config } from "isomorphic-dompurify";

interface RenderHTMLProps extends BoxProps {
  data: string;
  DOMPurifyConfig?: Config;
}

export default function RenderHTML(props: RenderHTMLProps) {
  const { data, DOMPurifyConfig, ...restProps } = props;
  return (
    <StyledHTML
      {...restProps}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(data, {
          ADD_TAGS: ["iframe"],
          ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
          ...DOMPurifyConfig,
        }) as string,
      }}
    />
  );
}

const StyledHTML = styled(Box)(({ theme }) => {
  return {
    wordWrap: "break-word",
    ["& *"]: {
      lineHeight: 1.6,
    },
    ["& ol"]: {
      ...theme.typography.body2,
    },
    ["& ul"]: {
      ...theme.typography.body2,
    },
    ["& li"]: {
      ...theme.typography.body2,
    },
    ["& p"]: {
      ...theme.typography.body2,
    },
    ["& a"]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    ["& span"]: {
      ...theme.typography.body2,
    },
    ["& div"]: {
      ...theme.typography.body2,
    },
    ["& img"]: {
      width: "100%",
      height: "auto",
      maxWidth: "100%",
      objectFit: "contain",
    },
  };
});
