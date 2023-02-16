import { useSetting } from "@/hooks";
import { Typography, BoxProps, styled } from "@mui/material";
import React, { MouseEventHandler, useMemo } from "react";
import Stack from "../Stack";

interface emailProps {
  block_type: string;
  value: string;
}

interface ContactInfoProp extends BoxProps {}

const ContactInfo = (props: ContactInfoProp) => {
  const { address, hotline, emails } = useSetting();

  const RenderEmail = useMemo(() => {
    if (typeof emails === "undefined") return null;

    return emails.map((email: emailProps, index: number) => (
      <ContactAddress
        key={index}
        title={`Email: ${email.value}`}
        onClick={() => window.open(`mailto:${email.value}`, "_self")}
      />
    ));
  }, [emails]);
  return (
    <StyledWrapperStack gap={"4px"} {...props}>
      <ContactAddress title={address} />
      <ContactAddress
        title={`Tel: ${hotline}`}
        onClick={() => window.open(`tel:${hotline}`, "_self")}
      />
      {RenderEmail}
    </StyledWrapperStack>
  );
};

const StyledWrapperStack = styled(Stack)(() => {
  return {
    "&:hover .MuiTypography-root:not(:first-child)": {
      cursor: "pointer",
    },
  };
});

interface contactAddressProps {
  title: string;
  onClick?: MouseEventHandler<HTMLSpanElement> | undefined;
}

const ContactAddress = (props: contactAddressProps) => {
  const { title, onClick } = props;
  return (
    <Typography variant={"caption2"} onClick={onClick}>
      {title}
    </Typography>
  );
};

export default ContactInfo;
