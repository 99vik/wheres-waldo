import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Leaderboard from './Leaderboard';
import Game from './Game';

function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/game/:title" element={<Game />} />
    </Routes>
  );
}

export default ApplicationRoutes;
