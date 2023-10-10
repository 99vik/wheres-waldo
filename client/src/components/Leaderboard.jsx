import { useEffect, useState } from 'react';
import { getRecords } from '../scripts/LeaderBoardAPI';

function Leaderboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await getRecords();
      setData(data);

      console.log(data);
    }
    getData();
  }, []);

  return <h1>Leaderboard</h1>;
}

export default Leaderboard;
