import React from "react";

import {
  alpha,
  CssBaseline,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";

import { DMSansFont, PoppinsFont } from "@/utils";

// import ArrowDownSimpleOutlined from "components/Icon/ArrowDownSimpleOutlined";
import ArrowLeftSimpleOutlined from "components/Icon/ArrowLeftSimpleOutlined";
import ArrowRightSimpleOutlined from "components/Icon/ArrowRightSimpleOutlined";
// import CircleCheckedOutlined from "components/Icon/CircleCheckedOutlined";
// import CircleOutlined from "components/Icon/CircleOutlined";
// import CheckedFilled from "components/Icon/CheckedFilled";
// import UncheckOutlined from "components/Icon/UncheckOutlined";

import { COMPONENT_STATE, PALETTE_COLOR, PSEUDO_STATE } from "configuration";

type OmitProperties =
  | "fontSize"
  | "fontWeight"
  | "lineHeight"
  | "letterSpacing";

const createTypographyProperties = (
  props: {
    fontSize: number;
    fontWeight: string | number;
    lineHeight: string | number;
    letterSpacing?: string | number;
    color?: string;
  } & Omit<React.CSSProperties, OmitProperties>
) => {
  const {
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    color = PALETTE_COLOR.neutral2,
    ...restProps
  } = props;

  return {
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    color,
    ...restProps,
  };
};

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: PALETTE_COLOR.primary,
    },
    secondary: {
      main: PALETTE_COLOR.secondary,
    },
    common: {
      white: PALETTE_COLOR.white,
      black: PALETTE_COLOR.black,
    },
    error: {
      main: PALETTE_COLOR.primary,
    },
    neutral: {
      neutral1: PALETTE_COLOR.neutral1,
      neutral2: PALETTE_COLOR.neutral2,
      neutral3: PALETTE_COLOR.neutral3,
      neutral4: PALETTE_COLOR.neutral4,
      neutral5: PALETTE_COLOR.neutral5,
      neutral6: PALETTE_COLOR.neutral6,
      neutral7: PALETTE_COLOR.neutral7,
      neutral8: PALETTE_COLOR.neutral8,
    },
  },
  typography: {
    fontFamily: PoppinsFont.style.fontFamily,
    hero: createTypographyProperties({
      fontFamily: DMSansFont.style.fontFamily,
      fontWeight: 700,
      fontSize: 96,
      lineHeight: "96px",
    }),
    h1: createTypographyProperties({
      fontFamily: DMSansFont.style.fontFamily,
      fontWeight: 700,
      fontSize: 64,
      lineHeight: "64px",
    }),
    h2: createTypographyProperties({
      fontFamily: DMSansFont.style.fontFamily,
      fontWeight: 700,
      fontSize: 48,
      lineHeight: "56px",
    }),
    h3: createTypographyProperties({
      fontFamily: DMSansFont.style.fontFamily,
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "48px",
    }),
    h4: createTypographyProperties({
      fontFamily: DMSansFont.style.fontFamily,
      fontWeight: 700,
      fontSize: 32,
      lineHeight: "40px",
    }),
    body1: createTypographyProperties({
      fontWeight: 400,
      fontSize: 24,
      lineHeight: "32px",
    }),
    body1Bold: createTypographyProperties({
      fontWeight: 600,
      fontSize: 24,
      lineHeight: "32px",
    }),
    body2: createTypographyProperties({
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "24px",
    }),
    body2Bold: createTypographyProperties({
      fontWeight: 500,
      fontSize: 16,
      lineHeight: "24px",
    }),
    caption: createTypographyProperties({
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "24px",
    }),
    captionBold: createTypographyProperties({
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "24px",
    }),
    caption2: createTypographyProperties({
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "20px",
    }),
    caption2Bold: createTypographyProperties({
      fontWeight: 600,
      fontSize: 12,
      lineHeight: "20px",
    }),
    hairline1: createTypographyProperties({
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "16px",
    }),
    hairline2: createTypographyProperties({
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "12px",
    }),
    hairline3: createTypographyProperties({
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "48px",
    }),
    button1: createTypographyProperties({
      fontFamily: DMSansFont.style.fontFamily,
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "16px",
    }),
    button2: createTypographyProperties({
      fontFamily: DMSansFont.style.fontFamily,
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "16px",
    }),
  },
});

const theme = createTheme({
  ...defaultTheme,
  components: {
    MuiTypography: {
      defaultProps: {
        variant: "body2",
      },
    },
    MuiButton: {
      defaultProps: {
        color: "secondary",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          ...defaultTheme.typography.button1,
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          padding: "16px 24px",

          borderRadius: defaultTheme.spacing(1),
          [PSEUDO_STATE.hover]: {
            backgroundColor: PALETTE_COLOR.secondaryHovered,
          },
          [COMPONENT_STATE.disabled]: {
            backgroundColor: PALETTE_COLOR.secondaryDisabled,
          },
        },
        contained: {
          [PSEUDO_STATE.hover]: {
            backgroundColor: PALETTE_COLOR.secondaryHovered,
          },
        },
        outlined: {
          [COMPONENT_STATE.disabled]: {
            backgroundColor: "transparent",
            borderColor: PALETTE_COLOR.secondary,
          },
          [PSEUDO_STATE.hover]: {
            color: defaultTheme.palette.common.white,
          },
        },
      },
    },

    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          ["& .MuiFormLabel-root"]: {
            marginBottom: 12,
          },
          ["& .MuiFormHelperText-root"]: {
            marginTop: 8,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          ...defaultTheme.typography.captionBold,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.hairline2,
          color: defaultTheme.palette.neutral.neutral5,
          textTransform: "uppercase",
          [COMPONENT_STATE.focused]: {
            color: defaultTheme.palette.secondary.main,
          },
          [COMPONENT_STATE.active]: {
            color: defaultTheme.palette.secondary.main,
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.captionBold,
          marginTop: "0 !important",
          borderWidth: 2,
          borderColor: defaultTheme.palette.common.black,
          borderStyle: "solid",
          borderRadius: 8,
          paddingRight: 16,

          [COMPONENT_STATE.active]: {
            borderColor: defaultTheme.palette.secondary.main,
          },
          [COMPONENT_STATE.focused]: {
            borderColor: defaultTheme.palette.secondary.main,

            ["& .MuiSvgIcon-root"]: {
              color: defaultTheme.palette.secondary.main,
            },
          },
          [COMPONENT_STATE.error]: {
            borderColor: defaultTheme.palette.primary.main,

            ["& .MuiSvgIcon-root"]: {
              color: defaultTheme.palette.primary.main,
            },
          },
        },
        input: {
          color: defaultTheme.palette.common.black,
          padding: "12px 16px",
          height: "unset",
          [PSEUDO_STATE.placeholder]: {
            color: defaultTheme.palette.neutral.neutral4,
          },
        },
      },
      defaultProps: {
        disableUnderline: true,
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.caption2,
          marginTop: 0,
        },
      },
    },

    MuiSelect: {
      defaultProps: {
        fullWidth: true,
        // IconComponent: ArrowDownSimpleOutlined,
      },
      styleOverrides: {
        root: {
          [COMPONENT_STATE.error]: {
            borderColor: defaultTheme.palette.primary.main,

            ["& .MuiSvgIcon-root"]: {
              color: defaultTheme.palette.primary.main,
            },
          },
        },
        select: {
          ...defaultTheme.typography.captionBold,
          padding: "12px 16px",
        },
        iconOpen: {
          color: defaultTheme.palette.secondary.main,
        },
      },
    },

    MuiPopover: {
      styleOverrides: {
        paper: {
          padding: "12px 16px",
          marginTop: 16,
          borderRadius: 8,
          borderColor: defaultTheme.palette.secondary.main,
          borderWidth: 2,
          borderStyle: "solid",

          ["& .MuiList-root"]: {
            padding: 0,
          },
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.captionBold,
          padding: "8px 16px",
          [COMPONENT_STATE.selected]: {
            backgroundColor: alpha(defaultTheme.palette.secondary.main, 0.16),
            [PSEUDO_STATE.hover]: {
              backgroundColor: alpha(defaultTheme.palette.secondary.main, 0.16),
            },
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderWidth: 2,
          borderRadius: 8,
          borderColor: defaultTheme.palette.common.black,

          borderStyle: "solid",
          ["& .MuiOutlinedInput-notchedOutline"]: {
            display: "none",
          },
          [COMPONENT_STATE.focused]: {
            borderColor: defaultTheme.palette.secondary.main,
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: defaultTheme.palette.neutral.neutral6,
          transform: "scale(1,1)",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          ...defaultTheme.typography.button2,
          color: defaultTheme.palette.secondary.main,
          [COMPONENT_STATE.selected]: {
            color: defaultTheme.palette.common.black,
            backgroundColor: "unset",
          },
        },
        icon: {
          width: "1.5em",
          height: "1.5em",
        },
      },
      defaultProps: {
        slots: {
          previous: ArrowLeftSimpleOutlined,
          next: ArrowRightSimpleOutlined,
        },
      },
    },
    MuiChip: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          height: "unset",
          padding: "4px 8px",
        },
        label: {
          ...defaultTheme.typography.caption2,
          color: defaultTheme.palette.neutral.neutral8,
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        textColor: "secondary",
      },
      styleOverrides: {
        indicator: {
          display: "none",
        },
      },
    },
    MuiTab: {
      defaultProps: {
        color: defaultTheme.palette.secondary.main,
      },
      styleOverrides: {
        root: {
          ...defaultTheme.typography.captionBold,
          color: defaultTheme.palette.primary.main,
          textTransform: "none",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "transparent",
          borderRadius: 8,
          transition: `all ${defaultTheme.transitions.duration.shorter}ms`,
          [PSEUDO_STATE.hover]: {
            color: PALETTE_COLOR.secondaryHovered,
            borderColor: PALETTE_COLOR.secondaryHovered,
          },
          [COMPONENT_STATE.selected]: {
            backgroundColor: defaultTheme.palette.secondary.main,
            color: defaultTheme.palette.common.black,
            borderColor: defaultTheme.palette.secondary.main,
          },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        // icon: <CircleOutlined stroke={defaultTheme.palette.common.black} />,
        // checkedIcon: <CircleCheckedOutlined />,
        color: "secondary",
      },
    },
    MuiCheckbox: {
      defaultProps: {
        // icon: <UncheckOutlined stroke={defaultTheme.palette.common.black} />,
        // checkedIcon: <CheckedFilled />,
        color: "secondary",
      },
    },
    MuiSlider: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
        rail: {
          backgroundColor: defaultTheme.palette.neutral.neutral6,
          opacity: 1,
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        noOptionsText: "Không có dữ liệu",
        // popupIcon: <ArrowDownSimpleOutlined />,
      },
      styleOverrides: {
        root: {
          ["& .MuiAutocomplete-inputRoot"]: {
            paddingRight: "7px !important",
          },
        },

        option: {
          ...defaultTheme.typography.captionBold,
          padding: "8px 16px",
          [COMPONENT_STATE.selected]: {
            backgroundColor: alpha(defaultTheme.palette.secondary.main, 0.16),
            [PSEUDO_STATE.hover]: {
              backgroundColor: alpha(defaultTheme.palette.secondary.main, 0.16),
            },
          },
          [`&[aria-selected="true"]`]: {
            backgroundColor: `${alpha(
              defaultTheme.palette.secondary.main,
              0.16
            )} !important`,
          },
        },
        paper: {
          paddingLeft: 12,
          marginTop: 16,
          borderRadius: 8,
          borderColor: defaultTheme.palette.secondary.main,
          borderWidth: 2,
          borderStyle: "solid",
          boxShadow: "none",
        },
        input: {
          padding: "12px 16px !important",
        },
        noOptions: {
          ...defaultTheme.typography.captionBold,
        },
        endAdornment: {
          paddingRight: 7,
        },
        popupIndicatorOpen: {
          color: defaultTheme.palette.secondary.main,
        },
        tag: {
          backgroundColor: "transparent",
          padding: 8,
          margin: 6,
          borderColor: defaultTheme.palette.secondary.main,
          borderWidth: 2,
          borderStyle: "solid",
          ["& .MuiChip-label"]: {
            ...defaultTheme.typography.caption,
            padding: 0,
            paddingRight: 12,
          },
          ["& .MuiChip-deleteIcon"]: {
            margin: 0,
          },
        },
      },
    },
    MuiBreadcrumbs: {
      defaultProps: {
        separator: ">",
      },
      styleOverrides: {
        li: {
          ...defaultTheme.typography.hairline1,
          color: defaultTheme.palette.neutral.neutral5,
          textTransform: "uppercase",
          ["&:nth-last-of-type(1)"]: {
            ["& p"]: {
              color: defaultTheme.palette.secondary.main,
            },
          },
        },
        separator: {
          ...defaultTheme.typography.hairline1,
          color: defaultTheme.palette.neutral.neutral5,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
