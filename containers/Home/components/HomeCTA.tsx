import { Box } from "@/components";
import { useMeasure } from "react-use";

import HomeCTAModel from "./HomeCTAModel";

export default function HomeCTA() {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  return (
    <Box ref={ref} height={width}>
      <HomeCTAModel />
    </Box>
  );
}
