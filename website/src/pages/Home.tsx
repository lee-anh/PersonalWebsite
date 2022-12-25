import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import portrait from "../static/claire3.jpeg";

function Home(): React.ReactElement {
  return (
    <>
      <Grid container>
        <Grid item md={2}>
          <></>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={portrait} alt="Claire Liu portrait" width="500" />
          </Box>
          <Typography align="center" variant="h2">
            Hi friends, I'm Claire!
          </Typography>
        </Grid>
        <Grid item md={2}>
          <></>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
