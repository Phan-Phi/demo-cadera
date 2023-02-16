import React, { useCallback } from "react";
import { FieldValues } from "react-hook-form";
import { Select, SelectProps } from "@mui/material";

import FormControlBase, {
  AugementFormControlBaseProps,
  ExtendedInputProps,
} from "./FormControlBase";

const FormControlForSelect = <T extends FieldValues>(
  props: AugementFormControlBaseProps<T> & {
    SelectProps?: SelectProps;
    children: React.ReactNode;
  }
) => {
  const { SelectProps, children, ...restProps } = props;

  const InputComponent = useCallback((props: ExtendedInputProps) => {
    const { onChange, value, inputRef, error } = props;

    return (
      <Select
        {...SelectProps}
        onChange={onChange}
        value={value}
        inputRef={inputRef}
        error={error}
      >
        {children}
      </Select>
    );
  }, []);

  return <FormControlBase {...restProps} InputComponent={InputComponent} />;
};

export default FormControlForSelect;
