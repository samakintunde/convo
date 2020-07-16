import React from "react";
import { StyledFlexItem } from "./flex-item.styles";

type FlexItemProps = {
  as?: string;
  basis?: string | number;
  flex?: number | string;
  grow?: string | number;
  span?: string | number;
  shrink?: string | number;
  children: React.ReactNode;
};

const FlexItem: React.FC<FlexItemProps> = (props) => {
  const { children } = props;

  // @ts-ignore
  return <StyledFlexItem {...props}>{children}</StyledFlexItem>;
};

FlexItem.defaultProps = {
  span: 12,
};

export default FlexItem;
