import { useWindowSize } from "react-use";
import { useEffect, useState } from "react";

import { useMedia } from "@/hooks";
import { SERVICE_ITEM_RATIO } from "@/constants";

const useServiceSize = () => {
  const { isMdDown } = useMedia();
  const { width: windowWidth } = useWindowSize();
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    let MAX_WIDTH_THRESHOLD = 135;

    if (isMdDown) {
      MAX_WIDTH_THRESHOLD = 90;
    }

    const WIDTH = Math.min(MAX_WIDTH_THRESHOLD, windowWidth / 6);

    setSize({
      width: WIDTH,
      height: WIDTH / SERVICE_ITEM_RATIO,
    });
  }, [isMdDown, windowWidth]);

  return size;
};

export default useServiceSize;
