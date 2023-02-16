import React, { useCallback } from "react";
import { FieldValues } from "react-hook-form";
import { RadioGroup, RadioGroupProps } from "@mui/material";

import FormControlBase, {
  ExtendedInputProps,
  AugementFormControlBaseProps,
} from "./FormControlBase";

const FormControlForRadio = <T extends FieldValues>(
  props: AugementFormControlBaseProps<T> & {
    RadioGroupProps?: RadioGroupProps;
    children: React.ReactNode;
  }
) => {
  const { RadioGroupProps, children, ...restProps } = props;

  const InputComponent = useCallback((props: ExtendedInputProps) => {
    const { onChange, value, inputRef } = props;

    return (
      <RadioGroup value={value} onChange={onChange} ref={inputRef}>
        {children}
      </RadioGroup>
    );
  }, []);

  return <FormControlBase {...restProps} InputComponent={InputComponent} />;
};

export default FormControlForRadio;
