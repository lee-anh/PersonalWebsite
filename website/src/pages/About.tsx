import React from "react";
import { Page } from "../components/Page";
import { Grid, Typography } from "@mui/material";
import Job from "../components/Job";

function About(): React.ReactElement {
  return (
    <Page>
      <Grid container>
        <Grid item md={2}>
          <></>
        </Grid>
        <Grid item xs={12} md={8}>
          Here I'll talk a little about my background and my hobbies. Don't
          forget to use emojis! jvector map of where we've travelled
          <Typography variant="h4">🌎 Travels</Typography>
          <Typography variant="h4">🎵 Hobbies</Typography>
          <Typography variant="h4">📚 Education</Typography>
          <Typography variant="body1">
            I am a senior at Lafayette College in Easton, PA. I'm completing a
            B.S. in Computer Science and a Math minor in 3 years, and I
            currently hold a 4.0/4.0 GPA. Prior to that, I graduated as
            valedictorian from Ashland High School in Massachusetts.
            <br /> <br />I always strive to do my best academically and really
            understand and engage with the course material. I genuinely enjoy
            studying and learning about how things work.
          </Typography>
        </Grid>
        <Grid item md={2}>
          <></>
        </Grid>
      </Grid>
    </Page>
  );
}

export default About;
