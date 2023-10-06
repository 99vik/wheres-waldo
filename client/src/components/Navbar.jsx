import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center bg-red-700 text-white py-3 px-20">
        <p className="text-3xl font-bold">Where&apos;s Waldo?</p>
        <div className="flex gap-20">
          <Link to="/">
            <p className="text-lg ">Home</p>
          </Link>
          <Link to="/leaderboard">
            <p className="text-lg">Leaderboard</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
