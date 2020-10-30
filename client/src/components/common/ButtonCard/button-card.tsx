import React from "react";
import { IconContext, IconType } from "react-icons/lib";
import { StyledButtonCard } from "./button-card.styles";

import ResponsiveTitle from "../ResponsiveTitle/index";

type ButtonCardProps = {
  icon: IconType;
  text: string;
  disabled?: boolean;
};

const ButtonCard: React.FC<ButtonCardProps> = (props) => {
  const { disabled = false, icon, text } = props;

  const handleClick = () => {};

  return (
    <StyledButtonCard disabled={disabled} onClick={handleClick}>
      <IconContext.Provider value={{ size: "40px" }}>
        {icon({})}
      </IconContext.Provider>

      <ResponsiveTitle min={16} max={21}>
        {text}
      </ResponsiveTitle>
    </StyledButtonCard>
  );
};

export { ButtonCard };
