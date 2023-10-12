import PropTypes from 'prop-types';
import GetCharacterPicture from '../scripts/ConditionalCharacterPicExport';

function CharacterTags({ guessedCharacters, dimensions }) {
  const displayedTags = guessedCharacters.map((character) => {
    return (
      <CharacterTag
        key={character.name}
        character={character}
        dimensions={dimensions}
      />
    );
  });

  return <>{displayedTags}</>;
}

function CharacterTag({ character, dimensions }) {
  const x = character.coordinates.x * dimensions.width - 25;
  const y = character.coordinates.y * dimensions.height - 25;

  const picture = GetCharacterPicture(character.name);
  return (
    <img
      src={picture}
      alt="picture"
      className="appear w-[50px] rounded-[50%] border-2 border-red-700 absolute z-1"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    />
  );
}

CharacterTags.propTypes = {
  guessedCharacters: PropTypes.array,
  dimensions: PropTypes.object,
};

CharacterTag.propTypes = {
  character: PropTypes.object,
  dimensions: PropTypes.object,
};

export default CharacterTags;
