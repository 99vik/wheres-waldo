import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </>
  );
}

export default Navbar;
