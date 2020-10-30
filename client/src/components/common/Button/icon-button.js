import React from "react";
import PropTypes from "prop-types";
import Button from "./index";
import styled from "styled-components";
import { remCalc } from "../../../theme/utils";

const StyledIconButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${props => props.theme.colors.brand500};
  padding-left: ${props => props.theme.spacing.sm};
  padding-right: ${props => props.theme.spacing.sm};

  &:hover {
    background-color: transparent;
    color: ${props => props.theme.colors.brand600};

    svg {
      fill: ${props => props.theme.colors.brand500};
    }
  }

  > * + * {
    margin-left: ${remCalc(8)};
  }

  svg {
    fill: ${props => props.theme.colors.brand300};
    transition: fill 0.3s ease-in-out;
  }
`;

const IconButton = props => {
  const { children, icon } = props;

  return (
    <StyledIconButton>
      {icon}
      {children}
    </StyledIconButton>
  );
};

IconButton.propTypes = {
  icon: PropTypes.element,
  children: PropTypes.node.isRequired,
};

export default IconButton;
