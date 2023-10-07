import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ChoosePictureCard({ img, title }) {
  return (
    <Link to={`/game/${title.replaceAll(' ', '_').toLowerCase()}`}>
      <div className="flex flex-col gap-2 items-center hover:bg-gray-300 cursor-pointer bg-gray-200 p-4 pb-2 rounded-[10px]">
        <img src={img} alt="image" className="w-[320px] h-[200px]" />
        <h1 className="text-xs text-neutral-700 font-semibold">{title}</h1>
      </div>
    </Link>
  );
}

ChoosePictureCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
};

export default ChoosePictureCard;
