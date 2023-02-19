import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import styled from "styled-components";

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;

  cursor: pointer;
  &.active {
    color: #9c2164;
    text-decoration: none;
  }
  &:hover {
    color: #9c2164;
    text-decoration: none;
  }
`;
