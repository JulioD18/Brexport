import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/Home/landing";
import Scores from "./components/Scores/scores";
import Leagues from "./components/Leagues/leagues";
import Chat from "./components/Chat/chat";
import Teams from "./components/Teams/teams";

function App() {
  return (
    <>
      <Box>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
