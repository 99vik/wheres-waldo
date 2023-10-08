import PropTypes from 'prop-types';

function TargetingBox({ coordinates, dimensions }) {
  const x = coordinates.x * dimensions.width - 25;
  const y = coordinates.y * dimensions.height - 25;

  return (
    <div
      className={`h-[50px] w-[50px] border-4 border-black/80 rounded-[50%] absolute`}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    ></div>
  );
}

TargetingBox.propTypes = {
  coordinates: PropTypes.object,
  dimensions: PropTypes.object,
};

export default TargetingBox;
