import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

function Navbar(): React.ReactElement {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
