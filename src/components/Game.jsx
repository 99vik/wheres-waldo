import { useParams } from 'react-router-dom';
import GetPicture from '../scripts/ConditionalPictureExport';
import Timer from './Timer';
import Characters from './Characters';

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
      <div className="p-1 sticky top-0">
        <Characters />
      </div>
      <img
        src={Picture}
        alt="picture"
        className="w-screen border-t border-red-700/30"
        onClick={pictureClick}
      />
    </>
  );
}

export default Game;
