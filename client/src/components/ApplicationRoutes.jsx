import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Leaderboard from './Leaderboard';

function ApplicationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}

export default ApplicationRoutes;
