import React from "react";
import { Select } from "antd";

const SelectField = ({
  input,
  onBlur,
  children,
  mode,
  value,
  defaultValue,
  ...rest
}) => {
  if (!value && !defaultValue) {
    return (
      <Select
        onBlur={() => {
          onBlur(value);
        }}
        mode={mode}
        children={children}
        {...rest}
      />
    );
  }
  return (
    <Select
      onBlur={() => {
        onBlur(value);
      }}
      mode={mode}
      defaultValue={defaultValue}
      value={value}
      children={children}
      {...rest}
    />
  );
};

export default SelectField;
