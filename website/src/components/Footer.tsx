import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import HeartLogo from "./HeartLogo";
function Footer(): React.ReactElement {
  return (
    <Box mt={4} sx={{ backgroundColor: "#ffdeeb", display: "flex" }}>
      <Grid container>
        <Grid item xs={6}>
          <Box
            ml={3}
            sx={{
              display: "flex",
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
          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <Typography>Made with love by Claire</Typography>
            <HeartLogo />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
