import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Map from "../map";
import style from "../../utils/style";
import { Button, ButtonGroup, Typography, Toolbar } from "@mui/material";

import styles from "../../styles/scores.module.css";

export default function Scores() {
  useEffect(() => {
    style(styles);
  }, []);

  const [activeButton, setActiveButton] = useState("text"); // 'text' is the default active button

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

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
            >
              SCORES
            </Typography>
          </Toolbar>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <ButtonGroup
          disableElevation
          variant="contained"
          aria-label="Disabled elevation buttons"
          sx={{ mt: 5, mb: 0 }}
        >
          <Button
            onClick={() => handleButtonClick("text")}
            className={
              activeButton === "text"
                ? styles["grass-button"]
                : styles["black-button"]
            }
          >
            <Typography variant="h6">Text</Typography>
          </Button>
          <Button
            onClick={() => handleButtonClick("map")}
            className={
              activeButton === "map"
                ? styles["grass-button"]
                : styles["black-button"]
            }
          >
            <Typography variant="h6">Map</Typography>
          </Button>
        </ButtonGroup>
      </Box>
      <Box
        display="flex"
        height="100%"
        width="100%"
        justifyContent="center" // Center map horizontally
        alignItems="center" // Center map vertically
        pt={0}
      >
        {activeButton === "map" ? <Map /> : <></>}
      </Box>
    </Box>
  );
}
