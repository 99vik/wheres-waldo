function FinishedGamePopup() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center">
        <div className="z-1 bg-neutral-400/40 h-full w-full absolute top-0 left-0"></div>
        <div className="w-[50%] h-[40%] p-10 border border-black bg-white absolute z-10 translate-y-20 rounded-2xl flex flex-col justify-between items-center">
          <div>
            <h1 className="text-center text-3xl">
              You found all the characters!
            </h1>
            <p className="mt-4 text-lg text-neutral-500">
              Submit your time to the leaderboard and compare it with others.
            </p>
          </div>
          <form action="" className="flex flex-col w-[300px]">
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

export default FinishedGamePopup;
