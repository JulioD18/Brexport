import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import LChart from "./graphs/line";

import style from "../../utils/style";
import basicStyle from "../../styles/basic.module.css";
import tStatsStyle from "../../styles/tstats.module.css";

import { connect } from "react-redux";

function TeamStat() {
  useEffect(() => {
    style(basicStyle);
  });

  return (
    <Box className={tStatsStyle["stats-box"]}>
      <LChart title="Goals per season" />
    </Box>
  );
}

export default connect()(TeamStat);
