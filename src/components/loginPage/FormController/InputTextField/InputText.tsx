// components/FormController/InputTextField/InputText.tsx

import { TextField } from "@mui/material";
import React from "react";
import { InputTextProps } from "../models";

const InputText = React.forwardRef(
  (props: InputTextProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      multiline,
      errorMessage,
      onInputChange,
      value,
      name,
      disabled,
      placeholder,
      ...rest
    } = props;
    let type: string = "text";
    if (name === "password") {
      type = "password";
    }
    return (
      <TextField
        {...rest}
        id={`form-test-${name}`}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onInputChange(e.target.value);
        }}
        disabled={disabled}
        placeholder={placeholder}
        multiline={multiline}
        error={Boolean(errorMessage)}
        autoComplete="off"
        inputRef={ref}
        type={type}
        size="small"
      />
    );
  }
);

export default InputText;
