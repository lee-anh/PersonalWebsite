import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import { Page } from "../components/Page";
import Job from "../components/Job";
import GaltsGateLogo from "../static/galts_logo.png";
import LafayetteLogo from "../static/laf_logo.png";
import MomentiveLogo from "../static/momentive_logo.png";

function Employment(): React.ReactElement {
  return (
    <Page>
      <Grid container>
        <Grid item md={2}>
          <></>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography align="center" variant="h2">
            Employment History
          </Typography>
          <Box mt={2}>
            <Typography
              align="center"
              variant="subtitle1"
              color="text.secondary"
            >
              I've had a variety of internships in college as I experimented
              with academic research, working in the start up space, and working
              for a more established company. My favorite experience has been
              working in industry. I strongly believe that we software engineers
              need to create products that improve the lives of users and
              benefit society at large.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Job
              companyName="Momentive.ai"
              title="Software Engineering Intern"
              dates="6/2022 - Present"
              location="San Mateo, CA"
              logoAlt="Momentive Logo"
              logoSource={MomentiveLogo}
            />
            <Job
              companyName="Lafayette College"
              title="Teaching Assistant"
              dates="1/2022 - Present"
              location="Easton, PA"
              notes="TA for Intro CS, Computer Organization, and Software Engineering."
              logoAlt="Lafayette College Logo"
              logoSource={LafayetteLogo}
            />
            <Job
              companyName="Lafayette College"
              title="Human Computer Interaction Researcher"
              dates="6/2021 - 5/2022"
              location="Easton, PA"
              logoAlt="Lafayette College Logo"
              logoSource={LafayetteLogo}
            />
            <Job
              companyName="Galt's Gate"
              title="Product Management Intern"
              dates="6/2021 - 11/2021"
              location="Bethlehem, PA"
              logoAlt="Galt's Gate Logo"
              logoSource={GaltsGateLogo}
            />
          </Box>
        </Grid>
        <Grid item md={2}>
          <></>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Employment;
