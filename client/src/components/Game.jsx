import { useParams } from 'react-router-dom';
import GetPicture from '../scripts/ConditionalPictureExport';

function Game() {
  const { title } = useParams();
  const Picture = GetPicture(title);

  return (
    <>
      <h1>{title}</h1>
      <img src={Picture} alt="" />
    </>
  );
}

export default Game;
