import { styled } from "@mui/material";
import { useUpdateEffect } from "react-use";
import React, { useCallback, useRef } from "react";
import { NumberFormatValues, OnValueChange } from "react-number-format";

import Box from "components/Box/Box";
import Stack from "components/Stack";
import NumberFormat, { ExtendedNumberFormatProps } from "components/NumberFormat";

import ArrowDownSimpleOutlined from "components/Icon/ArrowDownSimpleOutlined";

type OmitKey = "onValueChange";

interface NumberCounterInputProps extends Omit<ExtendedNumberFormatProps, OmitKey> {
  onValueChange: (value: number) => void;
}

const NumberCounterInput = (props: NumberCounterInputProps) => {
  const { value, onValueChange, ...restProps } = props;

  const valueRef = useRef(value);

  useUpdateEffect(() => {
    valueRef.current = value;
  }, [value]);

  const onValueChangeHandler: OnValueChange = useCallback((e) => {
    const { floatValue, value } = e;
    onValueChange(floatValue || 1);
  }, []);

  const onIncreaseNumberHandler = useCallback(() => {
    const value = valueRef.current;

    if (value && typeof value === "number") {
      onValueChange(value + 1);
    }
  }, []);

  const onDecreaseNumberHandler = useCallback(() => {
    const value = valueRef.current;

    if (value === 1) return;

    if (value && typeof value === "number") {
      onValueChange(value - 1);
    }
  }, []);

  const isAllowedHandler = useCallback((values: NumberFormatValues): boolean => {
    const { floatValue, value } = values;

    if (value.match(/[\.,]/g)) return false;
    if (floatValue == undefined) return true;
    if (floatValue === 0) return false;

    return true;
  }, []);

  return (
    <StyledBox>
      <StyledNumberFormat
        allowNegative={false}
        thousandSeparator={false}
        {...restProps}
        value={value}
        isAllowed={isAllowedHandler}
        onValueChange={onValueChangeHandler}
      />
      <ContainerIcon>
        <WrapperIcon onClick={onIncreaseNumberHandler}>
          <ArrowDownSimpleOutlined
            sx={{
              transform: "rotate(180deg)",
            }}
          />
        </WrapperIcon>
        <WrapperIcon
          disabled={typeof value === "number" && value <= 1}
          onClick={onDecreaseNumberHandler}
        >
          <ArrowDownSimpleOutlined />
        </WrapperIcon>
      </ContainerIcon>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => {
  return {
    borderRadius: 8,
    borderColor: theme.palette.secondary.main,
    borderWidth: 2,
    borderStyle: "solid",
    display: "flex",
    alignItems: "center",
    width: "fit-content",
  };
});

const StyledNumberFormat = styled(NumberFormat)(() => {
  return {
    border: "none",
    paddingRight: 0,
    ["& input"]: {
      paddingRight: 0,
    },
  };
});

const ContainerIcon = styled(Stack)(() => {
  return {
    paddingRight: 8,
  };
});

const WrapperIcon = styled(Box, {
  shouldForwardProp: (propName) => propName !== "disabled",
})<{ disabled?: boolean }>(({ theme, disabled }) => {
  return {
    display: "flex",
    cursor: "pointer",
    transition: `all ${theme.transitions.duration.shorter}ms`,
    ["&:hover"]: {
      color: theme.palette.secondary.main,
    },
    ["&:active, &:focus"]: {
      opacity: 0.65,
    },
    ...(disabled && {
      opacity: 0.5,
      pointerEvents: "none",
    }),
  };
});

export default NumberCounterInput;
