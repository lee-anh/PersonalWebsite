import React from "react";
import Box from "@mui/material/Box";
import ClaireLogo from "../static/claire_liu_logo.png";

function Logo(): React.ReactElement {
  return (
    <Box>
      <img src={ClaireLogo} width="200" />
    </Box>
  );
}

export default Logo;
