import React, { useState } from "react";
import {
  Box,
  Button,
  Fade,
  Grid,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";

import HeartLogo from "./HeartLogo";
import Logo from "./Logo";
import { NavLink } from "./NavLink";

import MenuIcon from "@mui/icons-material/Menu";
// TODO: make this responsive to smaller screen size
function Navigation(): React.ReactElement {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(255, 222, 235)",
          display: "flex",
          minHeight: "75px",
          position: "fixed",
          top: "0px",
          width: "100%",
          zIndex: "1000",
        }}
      >
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
                <Logo />
              </NavLink>
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
              }}
            >
              <NavLink to="/">
                <Typography mx={3}>Home</Typography>
              </NavLink>
              <HeartLogo />
              <NavLink to="/employment">
                <Typography mx={3}>Employment</Typography>
              </NavLink>
              <HeartLogo />
              <NavLink to="/projects">
                <Typography mx={3}>Projects</Typography>
              </NavLink>
              <HeartLogo />
              <NavLink to="/about">
                <Typography mx={3}>About</Typography>
              </NavLink>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "right",
              }}
              mr={2}
            >
              <Button onClick={handleClick}>
                <MenuIcon color="secondary" />
                <Typography color="secondary" ml={1}>
                  Menu
                </Typography>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>
                  <NavLink to="/">
                    <Box sx={{ width: "100%" }}>
                      <Typography sx={{ width: "150px" }}>Home</Typography>
                    </Box>
                  </NavLink>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <NavLink to="/employment">
                    <Typography sx={{ width: "150px" }}>Employment</Typography>
                  </NavLink>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <NavLink to="/projects">
                    <Typography sx={{ width: "150px" }}>Projects</Typography>
                  </NavLink>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <NavLink to="/about">
                    <Typography sx={{ width: "150px" }}>About</Typography>
                  </NavLink>
                </MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Navigation;
