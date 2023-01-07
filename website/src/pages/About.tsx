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
          <Typography align="center" variant="h2">
            About Me
          </Typography>

          <Typography variant="h4" mt={3}>
            📚 Education
          </Typography>
          <Typography variant="body1">
            I am a senior Marquis Fellow at Lafayette College in Easton, PA. I'm
            completing a B.S. in Computer Science and a Math minor in 3 years,
            and I currently hold a 4.0/4.0 GPA. Prior to that, I graduated as
            valedictorian from Ashland High School in Massachusetts.
            <br /> <br />I always strive to do my best academically and really
            understand and engage with the course material. I genuinely enjoy
            studying and learning about how things work. In addition to CS and
            Math I'm interested in Economics, Psychology, and Modern World
            History.
            <br />
            <br />
            I believe that teaching is one of the best forms of learning, so I
            serve as a Teaching Assistant in the Computer Science department at
            my school. In the past I've TA'd Intro CS where I attended class and
            held Mentored Study Group sessions, which were like a combination of
            recitation and lab. I've also TA'd the Computer Organization lab
            which taught C and assembly. This semester I'm the TA for 2 sections
            of the Software Engineering Lab. I really enjoy helping other people
            learn and develop a passion for CS.
            <br />
            <br />
            Two clubs that are important to me are Women in Computing (WINC) and
            the Association of Computing Machinery: Lafayette Chapter (ACM). I
            think WINC is a really important space for women to support one
            another. I am currently the President of ACM and I think ACM really
            helps to establish a sense of community among the CS students in the
            department.
          </Typography>
          <Typography variant="h4" mt={3}>
            🌎 Travels
          </Typography>
          <Typography variant="body1">
            I really love traveling and seeing different places and ways of
            life. Here are some places that I've traveled before. // TODO: put
            the jvector map here
          </Typography>
          <Typography variant="h4" mt={3}>
            🎵 Hobbies
          </Typography>
          <Typography variant="body1">
            I enjoy playing piano, ice skating, and spending time with my
            friends. I've also kept a journal since I was 7. After I graduate I
            want to learn how to ski and maybe fly planes! I also want to get
            better at cooking.
            <br />
          </Typography>
          <Typography variant="h4" mt={3}>
            ❤️ My Favorites
          </Typography>
          <Typography variant="body1">
            📖 Little Women <br />
            📖 A Tree Grows in Brooklyn <br />
            📖 To Kill a Mockingbird
            <br />
            🎬 Big Hero 6 <br />
            🎬 Princess Diaries <br />
            🎬 Clueless <br />
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
