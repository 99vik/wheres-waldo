import PropTypes from 'prop-types';
import CloseIcon from '../assets/icons/close.svg';
import { useRef, useState } from 'react';
import { createRecord } from '../scripts/LeaderBoardAPI';
import { useNavigate } from 'react-router-dom';

function FinishedGamePopup({ time }) {
  const [popup, setPopup] = useState(true);
  const nameInput = useRef(0);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const name = nameInput.current.value;
    const data = {
      name: name,
      minutes: minutes,
      seconds: seconds,
    };
    createRecord(data);
    navigate('/leaderboard');
  }

  function closePopup() {
    setPopup(false);
  }

  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center ${
          popup ? '' : 'hidden'
        }`}
      >
        <div className="z-1 bg-neutral-400/40 h-full w-full absolute top-0 left-0"></div>
        <div className="w-[50%] h-[45%] p-8 border border-black bg-white absolute z-10 translate-y-20 rounded-2xl flex flex-col justify-between items-center">
          <button onClick={closePopup}>
            <img
              src={CloseIcon}
              alt="close"
              className="w-[40px] absolute top-[6px] right-[6px] hover:scale-110"
            />
          </button>
          <div>
            <h1 className="text-center text-3xl">
              You found all the characters!
            </h1>
            <p className="text-center text-xl mt-2">
              It took you {minutes} minutes and {seconds} seconds
            </p>
            <p className="mt-10 text-md text-neutral-500">
              Submit your time to the leaderboard and compare it with others.
            </p>
          </div>
          <form
            action=""
            className="flex flex-col w-[300px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col mb-8">
              <label
                htmlFor="name"
                className="text-center text-neutral-600 mb-1"
              >
                Enter your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 border-neutral-300 p-1 rounded-lg focus:border-red-300 outline-none"
                ref={nameInput}
              />
            </div>
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-900 text-white rounded-xl py-1 text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

FinishedGamePopup.propTypes = {
  time: PropTypes.number,
};

export default FinishedGamePopup;