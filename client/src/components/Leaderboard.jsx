import { useEffect, useState } from 'react';
import { getRecords } from '../scripts/LeaderBoardAPI';
import WaldoImg from '../assets/images/waldo-tilted.png';

function Leaderboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await getRecords();
      setData(data);
    }
    getData();
  }, []);

  function dataRows() {
    const rows = data.map((record, index) => {
      const minutes = record.minutes;
      const seconds = record.seconds;

      return (
        <tr key={index} className="border-b border-neutral-200 bg-neutral-50">
          <td className="px-6 py-2 font-medium whitespace-nowrap">
            {record.name}
          </td>
          <td className="px-6 py-2 font-medium whitespace-nowrap">{`${
            minutes < 10 ? `0${minutes}` : minutes
          }:${seconds < 10 ? `0${seconds}` : seconds}`}</td>
        </tr>
      );
    });
    return rows;
  }

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <table className="text-gray-500 text-left mt-20 w-[500px] border border-neutral-200">
          <thead className="text-md text-white uppercase bg-neutral-600">
            <tr>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Time</th>
            </tr>
          </thead>
          <tbody>{data && dataRows()}</tbody>
        </table>
      </div>
      <img
        src={WaldoImg}
        alt="waldo"
        className="w-[180px] absolute right-0 bottom-0"
      />
    </>
  );
}

export default Leaderboard;
