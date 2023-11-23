import { useEffect } from "react";

import { Box } from "@mui/material";
import Background from "./background";
import style from "../../utils/style";

import styles from "../../styles/background.module.css";

export default function LandingPage() {
  useEffect(() => {
    style(styles);
  }, []);

  return (
    <>
      <Box overflow="hidden">
        <Background />
        <Box className={styles["scroll-down"]} />
      </Box>
    </>
  );
}
