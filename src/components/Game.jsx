import { useParams } from 'react-router-dom';
import GetPicture from '../scripts/ConditionalPictureExport';
import Timer from './Timer';
import Characters from './Characters';
import { useEffect, useState } from 'react';
import TargetingBox from './TargetingBox';
import CharacterTags from './CharacterTags';
import FinishedGamePopup from './FinishedGamePopup';
import { createSession, destroySession } from '../scripts/sessionAPI';

function Game() {
  const { title } = useParams();
  const Picture = GetPicture(title);
  const [targetingBox, setTargetingBox] = useState(null);
  const [boxCoordinates, setBoxCoordinates] = useState(null);
  const [pictureDimensions, setPictureDimensions] = useState(null);
  const [guessedCharacters, setGuessedCharacters] = useState([]);
  const [finishedGame, setFinishedGame] = useState(false);
  const [sessionID, setSessionID] = useState(null);

  useEffect(() => {
    async function getSession() {
      const session = await createSession();
      setSessionID(session.id);
    }
    getSession();
    return async () => {
      await destroySession(sessionID);
    };
  }, []);

  function closeTargetingBox() {
    setTargetingBox(false);
  }

  function finishGame() {
    setFinishedGame(true);
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
    if (newGuessedCharacters.length === 2) {
      finishGame();
    }
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
      {finishedGame && <FinishedGamePopup />}
      <Timer finishedGame={finishedGame} />
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
            foundCharacters={guessedCharacters.map(
              (character) => character.name
            )}
          />
        )}
        <CharacterTags
          guessedCharacters={guessedCharacters}
          dimensions={pictureDimensions}
        />
        <img
          src={Picture}
          alt="picture"
          className="w-screen border-t border-red-700/30"
          onClick={pictureClick}
        />
      </div>
    </>
  );
}

export default Game;
