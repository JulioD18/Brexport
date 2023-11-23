import { useEffect } from "react";
import Box from "@mui/material/Box";

import Table from "./league-table";
import style from "../../utils/style";
import { Typography, Toolbar } from "@mui/material";

import styles from "../../styles/scores.module.css";

export default function Leagues() {
  useEffect(() => {
    style(styles);
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
        className={styles["custom-title"]}
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
              marginBottom="0"
            >
              LEAGUES
            </Typography>
          </Toolbar>
        </Box>
      </Box>
      <Box
        display="flex"
        height="90%"
        width="100%"
        justifyContent="center" // Center map horizontally
        alignItems="center" // Center map vertically
        pt={0}
      >
        <Table />
      </Box>
    </Box>
  );
}
