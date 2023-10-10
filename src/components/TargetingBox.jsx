import PropTypes from 'prop-types';
import WaldoPic from '../assets/images/waldo.png';
import WendaPic from '../assets/images/wenda.png';
import OdlawPic from '../assets/images/odlaw.png';
import WizzardPic from '../assets/images/wizzard.png';
import WoofPic from '../assets/images/woof.png';
import CloseIcon from '../assets/icons/close.svg';
import checkClickPosition from '../scripts/checkClickPosition';

function TargetingBox({
  title,
  coordinates,
  dimensions,
  closeTargetingBox,
  characterFound,
  foundCharacters,
}) {
  const x = coordinates.x * dimensions.width - 25;
  const y = coordinates.y * dimensions.height - 25;
  const charactersPopupOffset = getCharactersPopupOffset(
    coordinates.x,
    coordinates.y
  );

  async function handleClick(character) {
    const data = await checkClickPosition(title, character, coordinates);
    if (data) {
      characterFound(character, coordinates);
    } else {
      console.log('false');
    }
    closeTargetingBox();
  }

  return (
    <>
      <div
        className={`h-[50px] w-[50px] border-4 border-black/80 rounded-[50%] absolute z-10`}
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      ></div>
      <div
        className="absolute bg-neutral-200 p-2 flex flex-col gap-1 rounded-xl z-10"
        style={{
          transform: `translate(${x + charactersPopupOffset.x}px, ${
            y + charactersPopupOffset.y
          }px)`,
        }}
      >
        <button
          className="bg-neutral-200 hover:scale-105 rounded-[50%] p-1 absolute top-[-25px] right-[-25px]"
          onClick={closeTargetingBox}
        >
          <img src={CloseIcon} alt="close" className="w-[35px] " />
        </button>
        <button
          className={`flex bg-white justify-start items-center px-2 py-1 border rounded-lg hover:scale-105 ${
            foundCharacters.includes('waldo') ? 'hidden' : ''
          }`}
          onClick={() => {
            handleClick('waldo');
          }}
        >
          <img
            src={WaldoPic}
            alt="waldo"
            className="w-10 rounded-[50%] border border-neutral-400 mr-2"
          />
          Waldo
        </button>
        <button
          className={`flex bg-white justify-start items-center px-2 py-1 border rounded-lg hover:scale-105 ${
            foundCharacters.includes('wenda') ? 'hidden' : ''
          }`}
          onClick={() => {
            handleClick('wenda');
          }}
        >
          <img
            src={WendaPic}
            alt="wenda"
            className="w-10 rounded-[50%] border border-neutral-400 mr-2"
          />
          Wenda
        </button>
        <button
          className={`flex bg-white justify-start items-center px-2 py-1 border rounded-lg hover:scale-105 ${
            foundCharacters.includes('odlaw') ? 'hidden' : ''
          }`}
          onClick={() => {
            handleClick('odlaw');
          }}
        >
          <img
            src={OdlawPic}
            alt="odlaw"
            className="w-10 rounded-[50%] border border-neutral-400 mr-2"
          />
          <p>Odlaw</p>
        </button>
        <button
          className={`flex bg-white justify-start items-center px-2 py-1 border rounded-lg hover:scale-105 ${
            foundCharacters.includes('wizzard') ? 'hidden' : ''
          }`}
          onClick={() => {
            handleClick('wizzard');
          }}
        >
          <img
            src={WizzardPic}
            alt="wizzard"
            className="w-10 rounded-[50%] border border-neutral-400 mr-2"
          />
          Wizzard
        </button>
        <button
          className={`flex bg-white justify-start items-center px-2 py-1 border rounded-lg hover:scale-105 ${
            foundCharacters.includes('woof') ? 'hidden' : ''
          }`}
          onClick={() => {
            handleClick('woof');
          }}
        >
          <img
            src={WoofPic}
            alt="woof"
            className="w-10 rounded-[50%] border border-neutral-400 mr-2"
          />
          Woof
        </button>
      </div>
    </>
  );
}

function getCharactersPopupOffset(width, height) {
  let x;
  let y;

  if (width < 0.8) {
    x = 60;
  } else {
    x = -150;
  }

  if (height > 0.9) {
    y = -230;
  } else if (height > 0.8) {
    y = -200;
  } else if (height > 0.7) {
    y = -150;
  } else if (height < 0.1) {
    y = 40;
    if (width > 0.8) {
      x = -170;
    }
  } else if (height < 0.2) {
    y = -20;
  } else {
    y = -70;
  }

  return { x, y };
}

TargetingBox.propTypes = {
  title: PropTypes.string,
  coordinates: PropTypes.object,
  dimensions: PropTypes.object,
  closeTargetingBox: PropTypes.func,
  characterFound: PropTypes.func,
  foundCharacters: PropTypes.array,
};

export default TargetingBox;
