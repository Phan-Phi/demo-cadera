import React, { useCallback } from "react";
import { FieldValues } from "react-hook-form";

import FormControlBase, { AugementFormControlBaseProps } from "./FormControlBase";
import NumberFormat, { ExtendedNumberFormatProps } from "components/NumberFormat";

type AugementFormControlProps<T extends FieldValues> = AugementFormControlBaseProps<T> & {
  InputProps?: ExtendedNumberFormatProps;
};

const FormControlForNumber = <T extends FieldValues>(
  props: AugementFormControlProps<T>
) => {
  const InputComponent = useCallback((props: any) => {
    const { onChange, defaultValue, value, ...restProps } =
      props as ExtendedNumberFormatProps;

    const onChangeWithAnotherType = onChange as (...event: any[]) => void;

    return (
      <NumberFormat
        {...restProps}
        onValueChange={(values) => {
          const { floatValue } = values;
          onChangeWithAnotherType && onChangeWithAnotherType(floatValue);
        }}
      />
    );
  }, []);

  return <FormControlBase {...props} InputComponent={InputComponent} />;
};

export default FormControlForNumber;
