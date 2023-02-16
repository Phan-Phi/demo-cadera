import { useRouter } from "next/router";
import { useWindowScroll } from "react-use";
import { Spiral as Hamburger } from "hamburger-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Fade,
  Paper,
  Dialog,
  styled,
  BoxProps,
  useTheme,
  Container,
  Typography,
  PaperProps,
  DialogContent,
} from "@mui/material";

import Image from "../../components/Image";
import Link from "../../components/Link";
import Stack from "../../components/Stack";
import Box from "../../components/Box/Box";

import { ROUTES_NAVBAR } from "@/routes";
import { useMedia, useSetting } from "@/hooks";

interface WrapperProps extends PaperProps {
  scroll: number;
}

interface BoxMenuBarProps extends BoxProps {
  datarouter?: string;
  link?: string;
}

export default function Header() {
  const theme = useTheme();
  const router = useRouter();
  const { y } = useWindowScroll();
  const { isSmDown, isSmUp } = useMedia();

  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openAppBar = useCallback(() => {
    setIsOpen((prev: boolean) => {
      return !prev;
    });
  }, []);

  const closeAppBar = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (y >= 350) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [y]);

  const renderNavBar = useMemo(() => {
    const renderItem = () => {
      return ROUTES_NAVBAR.map((el, idx) => {
        return (
          <WrapperMenuBarItem
            key={idx}
            datarouter={router.pathname}
            link={el.link}
          >
            <Link href={el.link} onClick={closeAppBar}>
              <Typography variant={isSmDown ? "body1Bold" : "button2"}>
                {el.name}
              </Typography>
            </Link>
          </WrapperMenuBarItem>
        );
      });
    };
    if (isSmUp) {
      // For PC
      return (
        <Stack
          variant="centerCenter"
          flexDirection="row"
          alignItems="center"
          columnGap={2}
        >
          {renderItem()}
        </Stack>
      );
    } else {
      // For Mobile
      return (
        <>
          <Hamburger
            size={20}
            toggled={isOpen}
            duration={0.8}
            rounded
            onToggle={openAppBar}
            color={theme.palette.neutral.neutral4}
          />

          <Dialog open={isOpen} onClose={closeAppBar} fullScreen>
            <DialogContent
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingX: 0,
              }}
            >
              <NavBarItem closeAppBar={closeAppBar}>
                <Hamburger
                  size={20}
                  rounded
                  toggled={isOpen}
                  onToggle={openAppBar}
                  color={theme.palette.neutral.neutral4}
                />
              </NavBarItem>

              <MenuAppBar>{renderItem()}</MenuAppBar>
            </DialogContent>
          </Dialog>
        </>
      );
    }
  }, [ROUTES_NAVBAR, isOpen, router.pathname, isSmUp]);

  return (
    <>
      <Wrapper elevation={6}>
        <NavBarItem>{renderNavBar}</NavBarItem>
      </Wrapper>

      {/* scroll */}
      <Fade in={checked}>
        <Wrapper2 elevation={6} scroll={y}>
          <NavBarItem>{renderNavBar}</NavBarItem>
        </Wrapper2>
      </Fade>
    </>
  );
}

const NavBarItem = ({
  children,
  closeAppBar,
}: {
  children: React.ReactNode;
  closeAppBar?: () => void;
}) => {
  const setting = useSetting();
  const { isSmDown } = useMedia();

  return (
    <Container>
      <Stack
        variant="spaceBetweenCenter"
        flexDirection="row"
        alignItems="center"
      >
        {setting.logo && (
          <Box onClick={closeAppBar}>
            <Link href="/">
              <Image
                src={setting.logo}
                width={isSmDown ? 158 : 200}
                height={isSmDown ? 32 : 40}
                alt="logo"
              />
            </Link>
          </Box>
        )}

        <Box>{children}</Box>
      </Stack>
    </Container>
  );
};

const Wrapper = styled(Paper)(({ theme }) => {
  return {
    borderRadius: 0,
    padding: "1.25rem 0",
  };
});

const Wrapper2 = styled(
  Paper,
  {}
)<WrapperProps>(({ theme }) => {
  return {
    borderRadius: 0,
    padding: "1.25rem 0",
    position: "fixed",
    width: "100%",
    zIndex: 10,
  };
});

const MenuAppBar = styled(Stack)(({ theme }) => {
  return {
    paddingTop: "4rem",
  };
});

const WrapperMenuBarItem = styled(Box, {
  shouldForwardProp: (propName) =>
    propName !== "datarouter" && propName !== "link",
})<BoxMenuBarProps>(({ theme, datarouter, link }) => {
  return {
    padding: "1rem 0.8rem",

    "& .MuiTypography-root": {
      color:
        link === datarouter
          ? theme.palette.primary.main
          : theme.palette.common.black,
    },

    [theme.breakpoints.down("sm")]: {
      padding: "1rem 2rem",
      borderLeft:
        link === datarouter
          ? `4px solid ${theme.palette.primary.main}`
          : "none",

      "& .MuiTypography-root": {
        color:
          link === datarouter
            ? theme.palette.common.black
            : theme.palette.neutral.neutral4,
      },
    },
  };
});
