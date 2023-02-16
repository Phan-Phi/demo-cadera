import React, { useMemo } from "react";
import { Box } from "@/components";
import { RenderEmbeded, RenderHTML } from "@/compositions";
import { ServicesDetailPage } from "@/interfaces";

type ContentProps = Pick<ServicesDetailPage, "body">;

export default function ContentServicesDetail({ body }: ContentProps) {
  const renderHTML = useMemo(() => {
    if (body == undefined) return null;

    return body.map((item, index) => {
      const { block_type, value } = item;

      if (block_type === "embed") {
        return <RenderEmbeded key={index} {...value} />;
      } else if (block_type === "content") {
        return <RenderHTML key={index} data={value} />;
      }
      return null;
    });
  }, [body]);

  return <Box>{renderHTML}</Box>;
}
