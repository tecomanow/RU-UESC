import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";

export default function DatePickerInput({ name }) {
/*  const datepickerRef = useRef(null);
  const { fieldName, defaultValue = '', registerField } = useField(name);

  const [date, setDate] = useState(defaultValue || null);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
    });
  }, [fieldName, registerField]);

  return (
    <Label htmlFor={fieldName}>
      <UnInput>
        <ReactDatePicker
          ref={datepickerRef}
          selected={date}
          onChange={setDate}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/aaaa"
          writable="true"
        />
      </UnInput>
    </Label>
  );*/
}