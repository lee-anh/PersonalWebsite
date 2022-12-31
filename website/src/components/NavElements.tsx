import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  align-items: center;
  background: #ffdeeb;
  height: 75px;
  display: flex;
  position: fixed;
  top: 0px;
  width: 100%;
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
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
