import PropTypes from 'prop-types';
import WaldoPic from '../assets/images/waldo.png';
import WendaPic from '../assets/images/wenda.png';
import OdlawPic from '../assets/images/odlaw.png';
import WizzardPic from '../assets/images/wizzard.png';
import WoofPic from '../assets/images/woof.png';
import CloseIcon from '../assets/icons/close.svg';

function TargetingBox({ coordinates, dimensions, closeTargetingBox }) {
  const x = coordinates.x * dimensions.width - 25;
  const y = coordinates.y * dimensions.height - 25;

  return (
    <>
      <div
        className={`h-[50px] w-[50px] border-4 border-black/80 rounded-[50%] absolute`}
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      ></div>
      <div
        className="absolute bg-neutral-200 p-2 flex flex-col gap-1 rounded-xl"
        style={{
          transform: `translate(${x + 60}px, ${y - 70}px)`,
        }}
      >
        <button
          className="bg-neutral-200 hover:scale-105 rounded-[50%] p-1 absolute top-[-25px] right-[-25px]"
          onClick={closeTargetingBox}
        >
          <img src={CloseIcon} alt="close" className="w-[35px] " />
        </button>
        <button className="flex bg-white justify-start items-center px-2 py-1 border rounded-lg hover:scale-105">
          <img
            src={WaldoPic}
            alt="waldo"
            className="w-10 rounded-[50%] border border-neutral-400 mr-2"
          />
          Waldo
        </button>
        <button className="flex bg-white justify-start items-center px-2 py-1 rounded-lg hover:scale-105">
          <img
            src={WendaPic}
            alt="waldo"
            className="w-10 rounded-[50%] border border-neutral-400 mr-2"
          />
          Wenda
        </button>
        <button className="flex bg-white justify-start items-center px-2 py-1 rounded-lg hover:scale-105">
          <img
            src={OdlawPic}
            alt="waldo"
            className="w-10 rounded-[50%] border border-neutral-400 mr-2"
          />
          <p>Odlaw</p>
        </button>
        <button className="flex bg-white justify-start items-center px-2 py-1 rounded-lg hover:scale-105">
          <img
            src={WizzardPic}
            alt="waldo"
            className="w-10 rounded-[50%] border border-neutral-400 mr-2"
          />
          Wizzard
        </button>
        <button className="flex bg-white justify-start items-center px-2 py-1 rounded-lg hover:scale-105">
          <img
            src={WoofPic}
            alt="waldo"
            className="w-10 rounded-[50%] border border-neutral-400 mr-2"
          />
          Woof
        </button>
      </div>
    </>
  );
}

TargetingBox.propTypes = {
  coordinates: PropTypes.object,
  dimensions: PropTypes.object,
  closeTargetingBox: PropTypes.func,
};

export default TargetingBox;
