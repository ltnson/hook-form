import { useState } from "react";

import { Controller, FieldValues } from "react-hook-form";

import { InputCommonProps } from "../models";

import ErrorMessage from "../ErrorMessage";
import InputText from "./InputText";
import { FormControl, Typography } from "@mui/material";
import Checkpassword from "../checkPass/CheckPass";

const InputTextField = <T extends FieldValues>(props: InputCommonProps<T>) => {
  const { control, name, label, classNameLabel, extendOnChange, ...rest } =
    props;
  const [password, setPassword] = useState<string>("");
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth>
          {label && (
            <Typography
              component="label"
              htmlFor={`form-test-${name}`}
              sx={{ marginBottom: 1 }}
              className={classNameLabel}
            >
              {label} <span className="text-red-500">*</span>
            </Typography>
          )}
          {label === "Password " ? (
            <InputText
              errorMessage={error?.message}
              {...rest}
              {...field}
              onInputChange={(value: string) => {
                field.onChange(value);
                extendOnChange?.(value);
                setPassword(value);
              }}
            />
          ) : (
            <InputText
              errorMessage={error?.message}
              {...rest}
              {...field}
              onInputChange={(value: string) => {
                field.onChange(value);
                extendOnChange?.(value);
              }}
            />
          )}
          {password.length > 0 && <Checkpassword password={password} />}
          {error?.message && <ErrorMessage message={error.message} />}
        </FormControl>
      )}
    />
  );
};

export default InputTextField;
