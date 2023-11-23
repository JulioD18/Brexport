import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import LChart from "./graphs/line";

import style from "../../utils/style";
import basicStyle from "../../styles/basic.module.css";
import tStatsStyle from "../../styles/tstats.module.css";

import { getTeamStats } from "../../redux/actions/team-action";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

type TeamStatProps = {
  getTeamStats: (team: string, league: string) => void;
  stat: any;
};

function TeamStat({ getTeamStats, stat }: TeamStatProps) {
  const { league, team } = useParams() as any;

  useEffect(() => {
    style(basicStyle);

    if (stat || team !== stat.team || league !== stat.league) {
      console.log("jj");
      getTeamStats(team, league);
    }

    console.log(stat);
  }, [!stat, team, league]);

  return (
    <Box className={tStatsStyle["stats-box"]}>
      <LChart title="Goals per season" />
    </Box>
  );
}

const mapStateToProps = (state: any) => ({
  stat: state.teams.stat,
});

export default connect(mapStateToProps, { getTeamStats })(TeamStat);
