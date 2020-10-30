import React from "react";
import { StyledStack } from "./Stack.styles";

type StackProps = {
  children: React.ReactNode;
  direction: "horizontal" | "vertical";
  gap: string;
};

const Stack = (props: StackProps) => {
  // @ts-ignore
  return <StyledStack {...props} />;
};

Stack.defaultProps = {
  direction: "horizontal",
  gap: "md",
};

export default Stack;
