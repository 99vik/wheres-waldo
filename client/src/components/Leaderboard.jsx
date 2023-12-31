import { useEffect, useState } from 'react';
import { getRecords } from '../scripts/LeaderBoardAPI';
import WaldoImg from '../assets/images/waldo-tilted.png';

function Leaderboard() {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function getData() {
      const data = await getRecords();
      setLoader(false);
      setData(data);
    }
    getData();
  }, []);

  function dataRows() {
    const rows = data.map((record, index) => {
      const minutes = record.minutes;
      const seconds = record.seconds;
      const date = new Date(record.created_at).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      return (
        <tr
          key={index}
          className="border-b border-neutral-200 bg-neutral-50 even:bg-red-50"
        >
          <td className="px-6 text-center py-2 font-medium whitespace-nowrap border-r w-[20px]">
            <p className="text-lg">{index + 1}.</p>
          </td>
          <td className="px-6 py-2 font-medium whitespace-nowrap">
            {record.name}
          </td>
          <td className="px-6 py-2 font-medium whitespace-nowrap  w-[120px]">{`${
            minutes < 10 ? `0${minutes}` : minutes
          }:${seconds < 10 ? `0${seconds}` : seconds}`}</td>
          <td className="px-6 py-2 font-medium whitespace-nowrap">{date}</td>
        </tr>
      );
    });
    return rows;
  }

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="w-full flex items-center justify-center">
            <table className="rounded-3xl overflow-hidden text-gray-500 text-left mt-20 w-[800px] border-separate ">
              <thead className="text-md text-white uppercase bg-red-700">
                <tr>
                  <th className="px-6 py-3">Ranking</th>
                  <th className="px-6 py-3">Username</th>
                  <th className="px-6 py-3">Time</th>
                  <th className="px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>{data && dataRows()}</tbody>
            </table>
          </div>
          <div className="absolute right-0 bottom-0 overflow-hidden">
            <img
              src={WaldoImg}
              alt="waldo"
              className="corner-waldo w-[180px]"
            />
          </div>
          {data.length === 0 && (
            <p className="text-center text-xl mt-11">No data.</p>
          )}
        </>
      )}
    </>
  );
}

function Loader() {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-[15%]">
        <svg
          aria-hidden="true"
          className="w-20 h-20 mr-2 text-gray-300 animate-spin fill-red-700"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </>
  );
}

export default Leaderboard;
