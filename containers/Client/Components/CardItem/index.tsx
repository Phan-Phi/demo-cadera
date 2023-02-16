import React, { Fragment, ReactNode } from "react";
import { useMeasure } from "react-use";
import CardItemBase from "@/components/CardItem/CardItemBase";
import Image from "@/components/Image";
import { styled } from "@mui/material";
import { client } from "@/interfaces/responseSchema/client";
import { Link } from "@/components";

interface CardItemProp {
  item: client;
}

interface CheckLinkProps {
  children: ReactNode;
  href: string;
}

const CardItem = (props: CardItemProp) => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const {
    item: { link, avatar },
  } = props;

  const CheckLink = (props: CheckLinkProps) => {
    const { children, href } = props;

    let Comp: any = Link;

    if (href === "") {
      Comp = Fragment;
    }

    return (
      <Comp href={href} target="_blank">
        {children}
      </Comp>
    );
  };

  return (
    <StyledCardItemBase ref={ref}>
      <CheckLink href={link}>
        <Image
          src={avatar}
          width={width}
          height={width / 2}
          objectFit="contain"
        />
      </CheckLink>
    </StyledCardItemBase>
  );
};

const StyledCardItemBase = styled(CardItemBase)(() => {
  return {
    cursor: "pointer",
    userSelect: "none",
    borderRadius: "0",
    "&:hover": {
      opacity: "0.7",
      transition: "all linear 0.2s",
    },
  };
});

export default CardItem;
