import React from "react";
import { Input as CInput, InputProps } from "@chakra-ui/core";
const Input = (props: InputProps) => {
  return (
    <CInput
      background="#EEEEEE 0% 0% no-repeat padding-box;"
      _placeholder={{
        color: "#CECECE",
        fontWeight: "normal",
        fontSize: "13px",
      }}
      border="none"
      borderRadius="none"
      {...props}
    />
  );
};

export default Input;
