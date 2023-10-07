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
      <h1>
        {minutes < 10 ? `0${minutes}` : minutes} :{' '}
        {seconds < 10 ? `0${seconds}` : seconds}
      </h1>
    </>
  );
}

export default Timer;
