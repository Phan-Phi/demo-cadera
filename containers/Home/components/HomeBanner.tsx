import { useMemo } from "react";
import { useMeasure } from "react-use";
import { Container, Grid, styled } from "@mui/material";

import { HomeType } from "@/interfaces";
import { Box } from "@/components";
import HeroContent from "@/components/HeroContent";

import HomeBannerModel from "./HomeBannerModel";
import SlickSlider from "@/compositions/Slick/SlickSlider";

interface Props {
  data: HomeType;
}

export default function HomeBanner(props: Props) {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const { data } = props;

  const { slide_banners } = data;

  const renderSlickItem = useMemo(() => {
    return slide_banners.map((el, idx) => {
      const { value } = el;
      return (
        <HeroContent
          key={idx}
          subTitle={value.description}
          title={value.title}
        />
      );
    });
  }, [slide_banners]);

  return (
    <Wrapper>
      <StyledGrid container columnSpacing={10}>
        <Grid item sm={6} md={5} className="WrapperSlick">
          <SlickSlider variant="simple">{renderSlickItem}</SlickSlider>
        </Grid>

        <Grid item sm={6} md={7}>
          <Box ref={ref} height={width}>
            {/* <HomeBannerModel /> */}
          </Box>
        </Grid>
      </StyledGrid>
    </Wrapper>
  );
}

const Wrapper = styled(Container)(({ theme }) => {
  return {
    position: "relative",
    "& .slick-slider": {
      position: "initial !important",
      width: "100%",
    },
  };
});

const StyledGrid = styled(Grid)(({ theme }) => {
  return {
    // padding: "7rem 0",
    marginTop: 0,
    "& .WrapperSlick .MuiBox-root": {
      flexDirection: "column",
      display: "flex",
      height: "100%",
      justifyContent: "center",
    },

    "& ul": {
      zIndex: 5,
      bottom: 15,
      width: "100%",
      left: "50%",
      transform: "translateX(-50%)",
    },

    "& .MuiGrid-item": {
      width: "100%",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      padding: "4rem 0",
    },
  };
});
