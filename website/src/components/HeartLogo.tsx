import React from "react";
import Box from "@mui/material/Box";
import Heart from "../static/magenta_heart.png";

function HeartLogo(): React.ReactElement {
  return (
    <Box mx={1}>
      <img src={Heart} width="20" />
    </Box>
  );
}

export default HeartLogo;
