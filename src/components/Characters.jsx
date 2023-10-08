import WaldoPic from '../assets/images/waldo.png';
import WendaPic from '../assets/images/wenda.png';
import OdlawPic from '../assets/images/odlaw.png';
import WizzardPic from '../assets/images/wizzard.png';
import WoofPic from '../assets/images/woof.png';

function Characters() {
  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center gap-7 bg-white/60 w-fit rounded-3xl">
        <div className="relative">
          <div className="bg-green-300 w-full h-full absolute opacity-60 rounded-[50%] hidden"></div>
          <img
            src={WaldoPic}
            alt="waldo picture"
            className="w-[70px] rounded-[50%] border-2 border-red-700"
          />
        </div>
        <div className="relative">
          <div className="bg-green-300 w-full h-full absolute opacity-60 rounded-[50%] hidden"></div>
          <img
            src={WendaPic}
            alt="wenda picture"
            className="w-[70px] rounded-[50%] border-2 border-red-700 "
          />
        </div>
        <div className="relative">
          <div className="bg-green-300 w-full h-full absolute opacity-60 rounded-[50%] hidden"></div>
          <img
            src={OdlawPic}
            alt="odlaw picture"
            className="w-[70px] rounded-[50%] border-2 border-red-700 "
          />
        </div>
        <div className="relative">
          <div className="bg-green-300 w-full h-full absolute opacity-60 rounded-[50%] hidden"></div>
          <img
            src={WizzardPic}
            alt="wizzard picture"
            className="w-[70px] rounded-[50%] border-2 border-red-700 "
          />
        </div>
        <div className="relative">
          <div className="bg-green-300 w-full h-full absolute opacity-60 rounded-[50%] hidden"></div>
          <img
            src={WoofPic}
            alt="woof picture"
            className="w-[70px] rounded-[50%] border-2 border-red-700 "
          />
        </div>
      </div>
    </div>
  );
}

export default Characters;
