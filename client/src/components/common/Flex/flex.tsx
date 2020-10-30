import React from "react";
import { StyledFlex } from "./flex.styles";

type FlexProps = {
  align?: "baseline" | "flex-start" | "center" | "flex-end";
  direction?: string;
  height?: string;
  wrap?: string;
  justify?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-evenly"
    | "space-around";
};

const Flex: React.FC<FlexProps> = (props) => {
  const { children } = props;

  // @ts-ignore
  return <StyledFlex {...props}>{children}</StyledFlex>;
};

Flex.defaultProps = {
  align: "flex-start",
  justify: "flex-start",
  height: "initial",
};

export default Flex;
