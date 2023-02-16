import { Container, Divider, Grid, styled, Typography } from "@mui/material";

import Link from "../../components/Link";
import Box from "../../components/Box/Box";
import Image from "../../components/Image";
import Spacing from "../../components/Spacing";

import { ROUTES_NAVBAR } from "@/routes";
import { SETTING_ITEM } from "@/interfaces";
import { useMedia, useSetting } from "@/hooks";
import ContactInfo from "@/components/ContactInfo";
import { FOOTER_GET_IN_TOUCH_ITEM, FOOTER_INFORMATION_ITEM } from "@/constants";

type FooterContentProps = Pick<
  SETTING_ITEM,
  "address" | "emails" | "hotline" | "logo"
>;

type Props = {
  data: FooterContentProps;
};

interface MenuItemProps {
  routesNavbar: { id: string; name: string; link: string }[];
  item: string[];
}

export default function Footer() {
  const setting = useSetting();

  return (
    <Wrapper>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <FooterContent {...setting} />
          </Grid>

          <Grid item xs={12}>
            <MuiDivider />
            <FooterCopyright />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

const FooterContent = (props: SETTING_ITEM) => {
  const { isSmDown } = useMedia();

  const { logo } = props;

  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={12} md={4}>
        {logo && (
          <Box marginBottom={isSmDown ? "1rem" : "2.5rem"}>
            <Image src={logo} width={200} height={40} alt="logoFooter" />
          </Box>
        )}
        <Box marginBottom={isSmDown ? "1.5rem" : 0}>
          <ContactInfo />
        </Box>
      </Grid>

      <Grid item xs={12} md={2}>
        <FooterSubTitle>Information</FooterSubTitle>
        <RenderMenuItem
          routesNavbar={ROUTES_NAVBAR}
          item={FOOTER_INFORMATION_ITEM}
        />
      </Grid>

      <Grid item xs={12} md={2}>
        <FooterSubTitle>Get In Touch</FooterSubTitle>

        <RenderMenuItem
          routesNavbar={ROUTES_NAVBAR}
          item={FOOTER_GET_IN_TOUCH_ITEM}
        />
      </Grid>
    </Grid>
  );
};

const FooterCopyright = () => {
  const { isSmDown } = useMedia();
  const date = new Date();

  return (
    <Box
      variant={isSmDown ? undefined : "centerCenter"}
      justifyContent="space-between !important"
    >
      <TextCopyright>
        Copyright © {date.getFullYear()} CADERA SYSTEMS LLC. All rights reserved
      </TextCopyright>

      <Link href="https://t-solution.vn" target="_blank">
        <Box variant="centerCenter" gap={1} marginTop={isSmDown ? "1rem" : 0}>
          <TextCopyright>Powered by</TextCopyright>
          <TextColorCopyright>T-Solution</TextColorCopyright>
        </Box>
      </Link>
    </Box>
  );
};

const MuiDivider = () => {
  const { isSmDown } = useMedia();
  return (
    <>
      <Spacing spacing={isSmDown ? 0 : 2} />
      <Divider />
      <Spacing spacing={isSmDown ? 2 : 6} />
    </>
  );
};

const RenderMenuItem = (props: MenuItemProps) => {
  let data: any = [];

  props.item.forEach((value) => {
    const dataItem: any = props.routesNavbar.find((el) => el.id === value);
    data.push(dataItem);
  });

  return data.map((el: any, idx: number) => {
    return (
      <Link href={el.link} key={idx}>
        <TextMenu>{el.name}</TextMenu>
      </Link>
    );
  });
};

//styled

const FooterSubTitle = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.body2Bold,
    marginBottom: "2.5rem",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
    },
  };
});
const TextInformation = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.caption2,
  };
});
const TextCopyright = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.caption2,
    color: theme.palette.neutral.neutral4,
    textAlign: "center",
  };
});
const TextColorCopyright = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.caption2,
    color: theme.palette.primary.main,
  };
});
const TextMenu = styled(Typography)(({ theme }) => {
  return {
    ...theme.typography.button2,
    color: theme.palette.neutral.neutral4,
    marginBottom: "2rem",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "1.5rem",
    },
  };
});
const Wrapper = styled(Box)(({ theme }) => {
  return {
    borderTop: `0.5px solid ${theme.palette.neutral.neutral6}`,
    padding: "5rem 0 3rem 0",

    [theme.breakpoints.down("sm")]: {
      padding: "2.5rem 0",
    },
  };
});

{
  /* <TextInformation>{address}</TextInformation>

          <Link href={`tel:${hotline}`}>
            <TextInformation>Tel: {hotline}</TextInformation>
          </Link>

          {renderEmails} */
}
// const renderEmails = useMemo(() => {
//   if (emails == undefined) return null;

//   return emails.map((el, idx) => {
//     return (
//       <Link href={`mailto: ${el.value}`} key={idx}>
//         <TextInformation>Email: {el.value}</TextInformation>
//       </Link>
//     );
//   });
// }, [emails]);
