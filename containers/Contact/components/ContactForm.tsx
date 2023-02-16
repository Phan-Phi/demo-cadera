import { useForm } from "react-hook-form";
import React, { useCallback } from "react";

import { Button } from "@mui/material";

import axios from "@/axios.config";
import { SUBMISSIONS_API } from "@/apis";
import { Stack, Box } from "@/components";
import { FormControl, FormControlForPhoneNumber } from "@/compositions";

import {
  contactForm as contactFormProps,
  defaultContactFormState,
  wrapperContactFormSchema,
} from "@/yups/contact";

import { useNotification } from "@/hooks/useNotification";

const Form = () => {
  const {
    enqueueSnackbarWithSuccess,
    enqueueSnackbarWithError,
    setLoading,
    loading,
  } = useNotification();

  const { control, handleSubmit, reset } = useForm({
    resolver: wrapperContactFormSchema,
    defaultValues: defaultContactFormState(),
  });

  const onSubmit = useCallback(async (data: contactFormProps) => {
    try {
      setLoading(true);

      await axios(SUBMISSIONS_API, {
        method: "post",
        data,
      });

      enqueueSnackbarWithSuccess("Submit success");

      reset(defaultContactFormState, {
        keepDirty: false,
      });
    } catch (err) {
      enqueueSnackbarWithError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Stack gap={2}>
      <FormControl
        control={control}
        name={"name"}
        label={"NAME"}
        placeholder={"Input Name"}
      />

      <FormControl
        control={control}
        name={"company"}
        label={"COMPANY"}
        placeholder={"Input Company"}
      />

      <FormControl
        control={control}
        name={"email"}
        label={"EMAIL"}
        placeholder={"Input Email"}
      />

      <FormControlForPhoneNumber
        control={control}
        name={"phone_number"}
        label={"PHONE"}
        placeholder={"Input Phone"}
      />

      <FormControl
        control={control}
        name={"message"}
        label={"MESSAGE"}
        placeholder={"Input Message"}
        InputProps={{
          multiline: true,
          rows: 8,
        }}
      />

      <Box width="fit-content" margin={"0 auto"}>
        <Button
          variant="outlined"
          disabled={loading}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

export default Form;
