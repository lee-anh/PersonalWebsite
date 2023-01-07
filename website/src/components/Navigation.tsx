import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import ClaireLogo from "../static/claire_liu_logo.png";
import HeartLogo from "./HeartLogo";
import { Nav, NavLink } from "./NavElements";

//  import MenuIcon from "@mui/icons-material/Menu";
// TODO: make this responsive to smaller screen size
function Navigation(): React.ReactElement {
  const theme = useTheme();
  return (
    <>
      <Nav>
        <Grid container>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
              }}
              mx={2}
            >
              <NavLink to="/">
                <img src={ClaireLogo} width="200px" />
              </NavLink>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                justifyContent: "right",
              }}
            >
              <NavLink to="/">
                <Typography>Home</Typography>
              </NavLink>
              <HeartLogo />
              <NavLink to="/employment">
                <Typography>Employment</Typography>
              </NavLink>
              <HeartLogo />
              <NavLink to="/about">
                <Typography>About</Typography>
              </NavLink>
              <HeartLogo />
              <NavLink to="/projects">
                <Typography>Projects</Typography>
              </NavLink>
            </Box>
          </Grid>
        </Grid>
      </Nav>
    </>
  );
}

export default Navigation;
