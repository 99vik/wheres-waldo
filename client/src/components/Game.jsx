import { useParams } from 'react-router-dom';
import GetPicture from '../scripts/ConditionalPictureExport';
import Timer from './Timer';

function Game() {
  const { title } = useParams();
  const Picture = GetPicture(title);

  return (
    <>
      <Timer />
      <img src={Picture} alt="picture" className="w-screen" />
    </>
  );
}

export default Game;
