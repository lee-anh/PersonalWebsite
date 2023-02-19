import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import YouTubeIcon from "@mui/icons-material/YouTube";

export type Props = {
  projectName: string;
  dates: string;
  image?: string;
  imageAlt?: string;
  githubLink: string;
  languages: string;
  notes: string;
  reportLink?: string;
  youtubeLink?: string;
};

function Project({
  projectName,
  dates,
  image,
  imageAlt,
  githubLink,
  languages,
  notes,
  reportLink,
  youtubeLink,
}: Props): React.ReactElement {
  return (
    <Box
      mx={2}
      my={2}
      sx={{
        width: "400px",
      }}
    >
      <Card raised>
        {image && imageAlt && (
          <CardMedia component="img" src={image} alt={imageAlt} />
        )}

        <CardContent>
          <Typography variant="h6">{projectName}</Typography>
          <Box sx={{ display: "flex" }}>
            <Link href={githubLink} target="_blank" mr={1}>
              <GitHubIcon color="secondary" />
            </Link>
            {reportLink && (
              <Link href={reportLink} target="_blank" mr={1}>
                <PictureAsPdfIcon color="secondary" />
              </Link>
            )}
            {youtubeLink && (
              <Link href={youtubeLink} target="_blank" mr={1}>
                <YouTubeIcon color="secondary" />
              </Link>
            )}
          </Box>
          <Typography color="text.secondary">{dates}</Typography>
          <Typography>Language(s): {languages}</Typography>
          <Typography mt={1}>{notes}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Project;
