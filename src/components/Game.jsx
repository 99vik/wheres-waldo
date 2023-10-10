import { useParams } from 'react-router-dom';
import GetPicture from '../scripts/ConditionalPictureExport';
import Timer from './Timer';
import Characters from './Characters';
import { useState } from 'react';
import TargetingBox from './TargetingBox';
import CharacterTags from './CharacterTags';

function Game() {
  const { title } = useParams();
  const Picture = GetPicture(title);
  const [targetingBox, setTargetingBox] = useState(null);
  const [boxCoordinates, setBoxCoordinates] = useState(null);
  const [pictureDimensions, setPictureDimensions] = useState(null);
  const [guessedCharacters, setGuessedCharacters] = useState([]);

  function closeTargetingBox() {
    setTargetingBox(false);
  }

  function characterFound(character, coordinates) {
    if (
      guessedCharacters
        .map((guess) => {
          return guess.name;
        })
        .includes(character)
    ) {
      return;
    }
    const foundCharacter = {
      name: character,
      coordinates: coordinates,
    };
    const newGuessedCharacters = guessedCharacters;
    newGuessedCharacters.push(foundCharacter);
    setGuessedCharacters(newGuessedCharacters);
  }

  function pictureClick(e) {
    const X = e.pageX / e.target.offsetWidth;
    const Y = (e.pageY - e.target.parentNode.offsetTop) / e.target.offsetHeight;
    setTargetingBox(true);
    setPictureDimensions({
      height: e.target.offsetHeight,
      width: e.target.offsetWidth,
    });
    setBoxCoordinates({ x: X, y: Y });
  }

  return (
    <>
      <Timer />
      <div className="p-1 sticky top-0 z-10">
        <Characters
          guessedCharacters={guessedCharacters.map((character) => {
            return character.name;
          })}
        />
      </div>
      <div className="relative z-0 overflow-hidden">
        {targetingBox && (
          <TargetingBox
            title={title}
            coordinates={boxCoordinates}
            dimensions={pictureDimensions}
            closeTargetingBox={closeTargetingBox}
            characterFound={characterFound}
          />
        )}
        <img
          src={Picture}
          alt="picture"
          className="w-screen border-t border-red-700/30"
          onClick={pictureClick}
        />
        <CharacterTags guessedCharacters={guessedCharacters} />
      </div>
    </>
  );
}

export default Game;
