import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import portrait from "../static/claire3.jpeg";
import { Page } from "../components/Page";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

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
          <Typography align="center" variant="h3" mt={3}>
            🙋🏻‍♀️ Hi friends, I'm Claire!
          </Typography>

          <Typography align="center" mt={2}>
            I'm a senior at Lafayette College pursuing a BS in Computer Science
            and a minor in Math. Upon graduation in May 2023, I plan on going
            into industry as a frontend engineer and I would eventually like to
            be fullstack.
          </Typography>
          <Box my={4}>
            <Grid container>
              <Grid item xs={4}>
                <Box sx={{ display: "flex", justifyContent: "right" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<PictureAsPdfIcon />}
                  >
                    Resume
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    color="secondary"
                    href="https://www.linkedin.com/in/claire-l-liu/"
                    startIcon={<LinkedInIcon />}
                    target="_blank"
                    variant="contained"
                  >
                    LinkedIn
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box sx={{ display: "flex", justifyContent: "left" }}>
                  <Button
                    color="secondary"
                    href="https://github.com/lee-anh"
                    startIcon={<GitHubIcon />}
                    target="_blank"
                    variant="contained"
                  >
                    Github
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Typography variant="h4">Skills</Typography>
          <Typography>C++ ⭐️⭐️⭐️⭐️</Typography>
          <Typography>C ⭐️⭐️⭐️⭐️</Typography>
          <Typography>JavaScript/Typescript ⭐️⭐️</Typography>
          <Typography>React ⭐️⭐️⭐️</Typography>
          <Typography>SQL/Postgresql ⭐️⭐️</Typography>
          <Typography>Agile Methodology ⭐️⭐️⭐️</Typography>
        </Grid>
        <Grid item md={2}>
          <></>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Home;
