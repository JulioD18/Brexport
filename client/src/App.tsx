import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/Home/landing";
import Scores from "./components/Scores/scores";

function App() {
  return (
    <>
      <Box>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/scores" element={<Scores />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
