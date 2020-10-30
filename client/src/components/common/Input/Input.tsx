import React from "react";
import { IconType, IconContext } from "react-icons/lib";
import { StyledInputWrapper } from "./Input.styles";

type InputProps = {
  name: string;
  value: string | number;
  className?: string;
  type?: string;
  placeholder?: string;
  prefixIcon?: IconType;
  suffixIcon?: IconType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = (props) => {
  const {
    name,
    value,
    className,
    type = "text",
    placeholder,
    prefixIcon,
    suffixIcon,
    onChange,
  } = props;

  return (
    <StyledInputWrapper>
      <IconContext.Provider value={{ size: "12px" }}>
        {prefixIcon && <span>{prefixIcon({})}</span>}
        <input
          className={className}
          name={name}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
        {suffixIcon && <span>{suffixIcon({})}</span>}
      </IconContext.Provider>
    </StyledInputWrapper>
  );
};
