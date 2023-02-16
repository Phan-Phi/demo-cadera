import Slider, { Settings } from "react-slick";
import { Box, styled, BoxProps } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface StyledWrapperProps extends BoxProps {
  variant: string;
}

const createSettings = (variant: string) => {
  if (variant == "simple") {
    return {
      fade: true,
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
    };
  } else {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
  }
};

export default function SlickSlider({
  children,
  props,
  variant = "simple",
}: {
  children: React.ReactNode;
  props?: Settings;
  variant?: "simple" | "multiple";
}) {
  return (
    <StyledWrapper variant={variant}>
      <Slider {...createSettings(variant)} {...props}>
        {children}
      </Slider>
    </StyledWrapper>
  );
}

const StyledWrapper = styled(Box, {
  shouldForwardProp: (propName) => {
    return propName !== "variant";
  },
})<StyledWrapperProps>(({ theme, variant }) => {
  return {
    "& .slick-slide": {
      padding: variant == "multiple" ? "0.8rem" : 0,
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.primary.main,
    },

    "& .slick-active button::before": {
      color: `${theme.palette.primary.main} !important`,
      opacity: "1 !important",
      fontSize: "0.7rem",
    },
    "&  .slick-active button": {
      paddingTop: "3px !important",
    },
    "&  button::before": {
      color: `${theme.palette.common.black} !important`,
      opacity: "1 !important",
    },
    "&  li": {
      margin: 0,
    },
  };
});
