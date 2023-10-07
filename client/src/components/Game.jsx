import { useParams } from 'react-router-dom';
import GetPicture from '../scripts/ConditionalPictureExport';
import Timer from './Timer';

function Game() {
  const { title } = useParams();
  const Picture = GetPicture(title);

  function pictureClick(e) {
    console.log(
      Number((e.pageX / e.target.offsetWidth).toFixed(2)) * 100,
      '% width'
    );
    console.log(
      Number(
        ((e.pageY - e.target.offsetTop) / e.target.offsetHeight).toFixed(2) *
          100
      ),
      '% height'
    );
  }

  return (
    <>
      <Timer />
      <img
        src={Picture}
        alt="picture"
        className="w-screen"
        onClick={pictureClick}
      />
    </>
  );
}

export default Game;
