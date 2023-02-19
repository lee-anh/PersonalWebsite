import React from "react";

import { Page } from "../components/Page";
import { Box, Grid, Typography } from "@mui/material";

import Project from "../components/Project";

// maybe I will make this into an Accordian style
function Projects(): React.ReactElement {
  return (
    <Page>
      <Grid container>
        <Grid item md={2}>
          <></>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography align="center" variant="h2">
            Projects
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" mt={2}>
            Here are some of my projects through the years. Most of my projects
            have been school projects but I recently have been working on more
            personal projects. To graduate early, I spread my junior year
            coursework over my sophomore and senior years which is why I've
            organized the sections like this. My favorite language is C++
            because the runtime is just so good :D
          </Typography>
          <Typography variant="h4" mt={4}>
            Personal Projects
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Project
              projectName="Personal Website"
              dates="December 2022 - January 2023"
              githubLink="https://github.com/lee-anh/PersonalWebsite"
              languages="TypeScript"
              notes="This website! I created this website using React and Material UI. It was my first time using Material UI and I think the framework is nice but very geared towards mobile displays."
            />
          </Box>
          <Typography
            color="text.secondary"
            variant="body1"
            mt={2}
          ></Typography>
          <Typography variant="h4" mt={4}>
            Junior/Senior Year
          </Typography>
          <Typography color="text.secondary" variant="body1" mt={2}>
            During my fall semester, I took CS 420 Artificial Intelligence and
            CS 320 Database Management Systems. This was the year I started to
            care more about writing more digestible and sustainable code, so I
            paid more attention to good documentation and following good coding
            practices and stanards.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Project
              projectName="Sudoku Solver"
              dates="Fall 2022"
              githubLink="https://github.com/lee-anh/AI_Project2"
              languages="C++"
              notes="Constraint Satisfaction Problem Agent with backtracking search and options for AC-3, minimum remaining values, least constraining values, and forward checking. Solves standard 9x9 sudoku board, overlapping sudoku board, and killer sudoku boards."
              reportLink="https://github.com/lee-anh/AI_Project2/blob/main/Project2_report.pdf"
            />
            <Project
              projectName="Sliding Tile Puzzle"
              dates="Fall 2022"
              githubLink="https://github.com/lee-anh/AI_Project1"
              languages="C++"
              notes="A* Search with Heuristics project for CS 420 Artificial Intelligence. Heuristics include Misplaced Tiles, Manhattan Distance, Euclidean Distance, and Max Sort."
              reportLink="https://github.com/lee-anh/AI_Project1/blob/main/AI%20Project%201%20Report.pdf"
            />
            <Project
              projectName="Implementing SQL Statements"
              dates="Fall 2022"
              githubLink="https://github.com/lee-anh/DB_Project1"
              languages="C++"
              notes="Have you ever wondered how SQL commands such as SELECT, INSERT, and UPDATE work? For my CS 320 Database Management Systems class, we were tasked with implementing these commands (mostly) without the use of classes, objects, structs. I implemented spanned and unspanned blocks for unordered, ordered, and hashed structures. I'll never take these commands for granted ever again 🥲"
              reportLink="https://github.com/lee-anh/DB_Project1/blob/main/Project%201%20Design%20Document.pdf"
            />
          </Box>
          <Typography variant="h4" mt={4}>
            Sophomore/Junior Year
          </Typography>
          <Typography color="text.secondary" variant="body1" mt={2}>
            During my second year of college I took CS 203 Computer Organization
            and CS 202 Analysis of Algorithms.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Project
              projectName="Concurrency Webserver"
              dates="Spring 2022"
              githubLink="https://github.com/lee-anh/CS_406_Project3"
              languages="C"
              notes="Using starter code from the OSTEP Three Easy Pieces Textbook (best technical read 🙌🏼), I created a multithreaded webserver. I thought it was really cool to see how a preliminary webserver worked and it was my first time writing multithreaded code!"
            />

            <Project
              projectName="Simple Shell"
              dates="Spring 2022"
              githubLink="https://github.com/lee-anh/CS_406_Project2"
              languages="C"
              notes="Using starter code from the OSTEP textbook,  I used system calls such as fork(), exec(), and wait() to create the shell."
            />
            <Project
              projectName="CLI Yelp"
              dates="Fall 2021"
              githubLink="https://github.com/lee-anh/CS_203_Project"
              languages="C"
              notes="A very limited form of yelp (without the comments) run on the command line. Mainly an exercise in using C to implement ArrayList, LinkedList, and BinaryTree. Created for CS 203 Computer Organization."
              reportLink="https://github.com/lee-anh/CS_203_Project/blob/main/p2_writeup.pdf"
            />
            <Project
              projectName="EXCEL"
              dates="Summer 2021"
              githubLink="https://github.com/lee-anh/EXCEL"
              languages="JavaScript"
              notes="Created a web based experiment using JS and the jspsych library for a Human Computer Interaction research experiment."
            />
          </Box>

          <Typography variant="h4" mt={4}>
            Freshman Year
          </Typography>
          <Typography color="text.secondary" variant="body1" mt={2}>
            Hopefully you can see how much I've improved since freshman year!
            One challenge of my first year of college was that it was fully
            remote. However, I learned SO much. In the fall I took CS 150 Data
            Structures and Algorithms and in the spring I took CS 205 Software
            Engineering.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Project
              projectName="Adopet"
              dates="Spring 2021"
              githubLink="https://github.com/lee-anh/Adopet"
              languages="C++"
              notes="Semester long group project. I worked full stack, mostly focusing on the GUI and the backend logic. This project was really important to me because I learned how to collaborate with others on a coding project and I developed confidence in myself as a software developer."
              youtubeLink="https://www.youtube.com/watch?v=_YEY-ij92nQ&ab_channel=ClaireLiu"
            />
            <Project
              projectName="Book Index"
              dates="Fall 2020"
              githubLink="https://github.com/lee-anh/Book-Index"
              languages="Java"
              notes="Creates a simple index of any book given a txt file. Index is implemented in 3 ways - using a sorted list, a tree map, and a hashmap."
            />
            <Project
              projectName="Coffee and Baristas"
              dates="Fall 2020"
              githubLink="https://github.com/lee-anh/CoffeeAndBaristas"
              languages="Java"
              notes="Event driven simulation of how many baristas should staff a coffee shop to maximize profit."
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

export default Projects;
