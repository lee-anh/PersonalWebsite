import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import portrait from "../static/claire3.jpeg";
import { Page } from "../components/Page";
function Home(): React.ReactElement {
  return (
    <Page>
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
            🙋🏻‍♀️ Hi friends, I'm Claire!
          </Typography>

          <Typography align="center">
            I'm a senior at Lafayette College pursuing a BS in Computer Science
            and a minor in Math. Upon graduation in May 2023, I plan on going
            into industry as a frontend engineer. My goal is to be a highly
            capable full-stack software engineer.
          </Typography>
          <Button variant="contained" color="secondary">
            Resume
          </Button>
          <Button variant="contained" color="secondary">
            LinkedIn
          </Button>
          <Button variant="contained" color="secondary">
            Github
          </Button>
          <Typography variant="h4">Skills</Typography>
          <Typography>C++ ⭐️⭐️⭐️⭐️</Typography>
          <Typography>C ⭐️⭐️⭐️⭐️</Typography>
          <Typography>React/Javascript ⭐️⭐️⭐️</Typography>
          <Typography>SQL/Postgresql ⭐️⭐️</Typography>
          <Typography>Agile Methodology ⭐️⭐️⭐️</Typography>
          <Typography>Star Trek Knowledge ⭐️⭐️⭐️⭐️⭐️</Typography>
        </Grid>
        <Grid item md={2}>
          <></>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Home;
