import PropTypes from 'prop-types';
import CloseIcon from '../assets/icons/close.svg';
import { useRef, useState } from 'react';
import { createRecord } from '../scripts/LeaderBoardAPI';
import { useNavigate } from 'react-router-dom';

function FinishedGamePopup({ time }) {
  const [loader, setLoader] = useState(false);
  const [popup, setPopup] = useState(true);
  const nameInput = useRef(0);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);
    const name = nameInput.current.value;
    const data = {
      name: name,
      minutes: minutes,
      seconds: seconds,
    };
    const response = await createRecord(data);
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
            {loader ? (
              <Loader />
            ) : (
              <>
                <button
                  type="submit"
                  className="bg-red-700 hover:bg-red-900 text-white rounded-xl py-1 text-lg"
                >
                  Submit
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

function Loader() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <svg
          aria-hidden="true"
          className="w-9 h-9 text-gray-300 animate-spin fill-red-700"
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

FinishedGamePopup.propTypes = {
  time: PropTypes.number,
};

export default FinishedGamePopup;
