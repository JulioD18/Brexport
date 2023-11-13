import { useEffect } from "react";

import Box from "@mui/material/Box";
import { Toolbar, Typography } from "@mui/material";

import style from "../../utils/style";
import basicStyles from "../../styles/basic.module.css";

export default function Teams() {
  useEffect(() => {
    style(basicStyles);
  }, []);

  return (
    <Box
      position="relative" // Change to relative
      display="flex"
      flexDirection="column" // Stack elements vertically
      alignItems="center" // Center horizontally
      justifyContent="center" // Center vertically
      className="blk-bg"
      height="100vh"
      width="100vw"
    >
      <Box
        className={basicStyles["custom-title"]}
        top="0"
        width="80%"
        display="flex"
        justifyContent="center"
      >
        <Box height="10%">
          <Toolbar>
            <Typography
              variant="h3"
              noWrap
              component="div"
              color="white"
              height="20%"
            >
              TEAMS
            </Typography>
          </Toolbar>
        </Box>
      </Box>
    </Box>
  );
}
