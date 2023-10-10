function CharacterTags({ guessedCharacters }) {
  const displayedTags = guessedCharacters.map((character) => {
    return <CharacterTag key={character.name} character={character} />;
  });

  return <>{displayedTags}</>;
}

function CharacterTag({ character }) {
  return <h1>{character.name}</h1>;
}

export default CharacterTags;
