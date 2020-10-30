import React from "react";
import { StyledHeader } from "./Header.styles";
import ResponsiveTitle from "../ResponsiveTitle";
import { GridContainer } from "../GridContainer/GridContainer";
import { Link } from "react-router-dom";
import Box from "../Box";

export const Header = () => {
  return (
    <StyledHeader>
      <GridContainer>
        <Box width="max-content">
          <Link to="/">
            <ResponsiveTitle min={20} max={28}>
              Convo
            </ResponsiveTitle>
          </Link>
        </Box>
      </GridContainer>
    </StyledHeader>
  );
};
