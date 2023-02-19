import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import HeartLogo from "./HeartLogo";
// not using Footer right now
function Footer(): React.ReactElement {
  return (
    <Box
      mt={4}
      sx={{ backgroundColor: "#ffdeeb", display: "flex", minHeight: "100%" }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Box
            ml={3}
            sx={{
              alignContent: "center",
              display: "flex",
              height: "60px",
              justifyContent: "left",
            }}
          >
            <Typography>
              "We know truth, not only by reason, but also by the heart -
              Pascal"
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ display: "flex", justifyContent: "right", bottom: "0" }}>
            <Typography>Made with love by Claire</Typography>
            <HeartLogo />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
