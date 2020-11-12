import React from "react";
import { Button as CButton, ButtonProps } from "@chakra-ui/core";

export interface IButtonProps extends ButtonProps {
  variant: "primary" | "secondary";
}
const Button = (props: IButtonProps) => {
  let variantStyle: ButtonProps = {};
  switch (props.variant) {
    case "primary":
      variantStyle = {
        background: "#5863F8",
        color: "white",
      };
      break;
    case "secondary":
      variantStyle = {
        background: "#fff",
        color: "#5863F8",
      };
      break;

    default:
      break;
  }
  return (
    <CButton
      borderRadius="none"
      fontWeight="normal"
      {...variantStyle}
      {...props}
    >
      {props.children}
    </CButton>
  );
};

export default Button;
