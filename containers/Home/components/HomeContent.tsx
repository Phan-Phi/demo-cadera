import { useMeasure } from "react-use";
import { styled, BoxProps, Container } from "@mui/material";

import { HomeType } from "@/interfaces";
import { ContentBlock, Box } from "@/components";
import {
  HOME_CONTENT_IMAGE_RATIO,
  MOBILE_HOME_CONTENT_IMAGE_RATIO,
} from "@/constants";

interface PropsStyledBoxImage extends BoxProps {
  width: number;
  image: string;
}

interface Props {
  data: HomeType;
}

export default function HomeContent(props: Props) {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const { image_banner, title_banner, sub_title_banner, body_banner } =
    props.data;

  return (
    <Box ref={ref}>
      <WrapperImage width={width} image={image_banner}>
        <StyledContainer>
          <ContentBlock
            subTitle={sub_title_banner}
            title={title_banner}
            text={body_banner}
          />
        </StyledContainer>
      </WrapperImage>
    </Box>
  );
}

const WrapperImage = styled(Box, {
  shouldForwardProp: (propName) => propName !== "width" && propName !== "image",
})<PropsStyledBoxImage>(({ theme, width, image }) => {
  return {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: `${width}px`,
    height: width / HOME_CONTENT_IMAGE_RATIO,

    [theme.breakpoints.down("sm")]: {
      height: width / MOBILE_HOME_CONTENT_IMAGE_RATIO,
      backgroundSize: `cover`,
    },
  };
});

const StyledContainer = styled(Container)(({ theme }) => {
  return {
    position: "relative",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
  };
});
