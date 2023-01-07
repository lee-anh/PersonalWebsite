import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import LafayetteLogo from "../static/laf_logo.png";

export type Props = {
  companyName: string;
  title: string;
  dates: string;
  location: string;
  logoAlt?: string;
  logoSource?: string;
  notes?: string;
};

function Job({
  companyName,
  title,
  dates,
  location,
  logoAlt,
  logoSource,
  notes,
}: Props): React.ReactElement {
  const theme = useTheme();
  return (
    <Box mx={4} my={2}>
      <Card
        raised
        sx={{
          display: "flex",
          minWidth: "100%",
          width: "400px",
          [theme.breakpoints.up("sm")]: {
            width: "600px",
          },
          [theme.breakpoints.up("md")]: {
            width: "800px",
          },
        }}
      >
        {logoSource && (
          <Box
            mx={2}
            my={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "0px",
              [theme.breakpoints.up("md")]: {
                minWidth: "250px",
              },
            }}
          >
            <CardMedia
              component="img"
              width="250"
              src={logoSource}
              alt={logoAlt}
            />
          </Box>
        )}
        <CardContent>
          <Typography variant="h6">{companyName}</Typography>
          <Typography variant="h5" color="secondary.main">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {dates}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {location}
          </Typography>
          {notes && (
            <Typography variant="body1" color="text.secondary">
              {notes}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Job;
// Idk if we will need an index.ts to string these two together
