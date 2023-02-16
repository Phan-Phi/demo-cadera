import { Grid } from "@mui/material";

import { HomeType, ServicesDetailPage } from "@/interfaces";
import { CarouselService, ServiceItem } from "@/compositions";
import { Headline, Spacing, WrapperSection } from "@/components";

interface Props {
  dataListing: HomeType;
  dataDetail: ServicesDetailPage[];
}

export default function HomeService(props: Props) {
  const { dataListing, dataDetail } = props;

  const { title_service, sub_title_service } = dataListing;

  return (
    <WrapperSection>
      <Grid container>
        <Grid item xs={12}>
          <Headline title={title_service} subTitle={sub_title_service} />
          <Spacing spacing={2.5} />
        </Grid>

        <Grid item xs={12}>
          <CarouselService>
            {dataDetail.map((el) => {
              return <ServiceItem key={el.id} {...el} />;
            })}
          </CarouselService>
        </Grid>
      </Grid>
    </WrapperSection>
  );
}
