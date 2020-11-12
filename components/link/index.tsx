import NLink, { LinkProps } from "next/link";
import DownIcon from "public/assets/svgs/chevron-down.svg";
import React from "react";

export interface ILink extends LinkProps {
  children: JSX.Element | React.ReactNode;
  hasChildren?: boolean;
}
const Link = (props: ILink) => {
  return (
    <li>
      <NLink {...props}>
        <a>{props.children}</a>
      </NLink>
      {props?.hasChildren && <DownIcon />}
    </li>
  );
};

export default Link;
