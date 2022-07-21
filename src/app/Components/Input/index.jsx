import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";

export function Input({ name, placeholder }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <div style={{ margin: 10 }}>
        <TextField
          label={placeholder}
          inputRef={inputRef}
          defaultValue={defaultValue}
          error={error ? true : false}
          helperText={error}
          InputLabelProps={{ shrink: true }}
        />
      </div>
    </>
  );
}
