import { Container, Grid, useTheme } from "@mui/material";

import HomeCTA from "./HomeCTA";
import { HomeType } from "@/interfaces";
import { CTAContent, WrapperSection } from "@/components";

interface Props {
  data: HomeType;
}

export default function HomeContact(props: Props) {
  const theme = useTheme();
  const { title_contact, sub_title_contact } = props.data;

  return (
    <WrapperSection backgroundColor={theme.palette.common.black}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12}>
            {/* <HomeCTA /> */}
          </Grid>

          <Grid item xs={12}>
            <CTAContent subTitle={sub_title_contact} title={title_contact} />
          </Grid>
        </Grid>
      </Container>
    </WrapperSection>
  );
}
