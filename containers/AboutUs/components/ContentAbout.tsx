import { Box } from "@/components";
import React, { useMemo } from "react";
import { AboutPage } from "@/interfaces";
import { RenderEmbeded, RenderHTML } from "@/compositions";

type ContentProps = Pick<AboutPage, "body">;

export default function ContentAbout({ body }: ContentProps) {
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
