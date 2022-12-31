import React from "react";

import { Page } from "../components/Page";
import Grid from "@mui/material/Grid";
function Projects(): React.ReactElement {
  return (
    <Page>
      <Grid container>
        <Grid item md={2}>
          <></>
        </Grid>
        <Grid item xs={12} md={8}>
          Here I will talk more about some of my more interesting school
          projects
        </Grid>
        <Grid item md={2}>
          <></>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Projects;
