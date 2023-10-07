import { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const newTime = time + 1;
      setTime(newTime);
    }, 1000);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <>
      <div className="flex items-center justify-center mt-1">
        <p className="text-4xl text-red-700 font-semibold font-digital">
          {minutes < 10 ? `0${minutes}` : minutes} :{' '}
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
      </div>
    </>
  );
}

export default Timer;
