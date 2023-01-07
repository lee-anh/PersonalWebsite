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
          <Typography variant="subtitle1">
            Here are some of my projects through the years. Most of my projects
            have been school projects but I recently have been working on more
            personal projects. To graduate early, I spread my junior year
            coursework over my sophomore and senior years which is why I've
            organized the sections like this. My favorite language is C++
            because the runtime is just so good :D
          </Typography>
          <Typography variant="h4" mt={3}>
            Personal Projects
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Project
              projectName="Personal Website"
              dates="December 2022 - January 2023"
              githubLink="https://github.com/lee-anh/PersonalWebsite"
              languages="TypeScript"
              notes="This website! I created this website using React and Material UI. It was my first time using Material UI and I think the framework is nice but very geared towards mobile displays."
            />
          </Box>
          <Typography variant="body1" mt={2}></Typography>
          <Typography variant="h4" mt={3}>
            Junior/Senior Year
          </Typography>
          <Typography variant="body1" mt={2}>
            During my fall semester, I took CS 420 Artificial Intelligence and
            CS 320 Database Management Systems. Here are a few of my projects
            from these classes, although there are 2 projects for Databases that
            were group projects and not displayed here.
          </Typography>
          <Box
            sx={{
              display: "flex",
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
          <Typography variant="h4" mt={3}>
            Sophomore/Junior Year
          </Typography>
          <Typography variant="body1" mt={2}></Typography>
          <Typography variant="h4" mt={3}>
            Freshman Year
          </Typography>
          <Typography variant="body1" mt={2}>
            Hopefully you can see how much I've improved since freshman year!
            One challenge of my first year of college was that it was fully
            remote. However, I learned SO much. In the fall I took CS 150 Data
            Structures and Algorithms and in the spring I took CS 205 Software
            Engineering.
          </Typography>
          <Box sx={{ display: "flex" }}>
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
