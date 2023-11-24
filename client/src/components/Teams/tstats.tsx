import { useEffect, useState } from "react";

import { Box, CircularProgress } from "@mui/material";
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

  const [unloaded, setUnloaded] = useState(true);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    style(basicStyle);

    if (!stat || team !== stat.team || league !== stat.league) {
      getTeamStats(team, league);
      setUnloaded(true); // Set to true when fetching new data
    }
  }, [stat, team, league]);

  useEffect(() => {
    // Update goals when stat changes
    if (stat && stat.length > 0) {
      const updatedGoals = stat.map((s: any) => [s.season, s.goals]);
      setGoals(updatedGoals);
      setUnloaded(false); // Set unloaded to false when data is available
    }
  }, [stat]);

  return (
    <>
      {unloaded ? (
        <CircularProgress />
      ) : (
        <Box className={tStatsStyle["stats-box"]}>
          <LChart title="Goals per season" data={goals} />
        </Box>
      )}
    </>
  );
}

const mapStateToProps = (state: any) => ({
  stat: state.teams.stat,
});

export default connect(mapStateToProps, { getTeamStats })(TeamStat);
