import BeachImg from '../assets/images/beach.jpg';
import SkiSlopesImg from '../assets/images/ski_slopes.jpg';
import OlympicStadiumImg from '../assets/images/olympic_stadium.jpg';
import ChoosePictureCard from './ChoosePictureCard';
import WaldoImg from '../assets/images/waldo-tilted.png';

function Home() {
  return (
    <>
      <div className="flex flex-col justify-center gap-6 items-center mt-[100px]">
        <h1 className="text-lg text-red-600 font-bold">Choose a picture</h1>
        <div className="flex gap-10">
          <ChoosePictureCard img={BeachImg} title="Beach" />
          <ChoosePictureCard img={SkiSlopesImg} title="Ski Slopes" />
          <ChoosePictureCard img={OlympicStadiumImg} title="Olympic Stadium" />
        </div>
      </div>
      <div className="absolute right-0 bottom-0 overflow-hidden">
        <img src={WaldoImg} alt="waldo" className="corner-waldo w-[180px]" />
      </div>
    </>
  );
}

export default Home;
