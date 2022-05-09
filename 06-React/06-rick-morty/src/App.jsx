import react, { useEffect, useState } from 'react'
import './App.css'


function checkImage(image, status) {
  if (status === 'Alive') {
    return (
      <div className='status-alive'>
        <img className='status-image' src={image} alt="Alive" />
      </div>
    )
  } else if (status === 'Dead') {
    return (
      <div className='status-dead'>
        <img className='status-image' src={image} alt="Dead" />
      </div>
    )
  } else {
    return (
      <div className='status-unknown'>
        <img className='status-image' src={image} alt="Unknown" />
      </div>
    )
  }
}


function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <div id="loading">Loading...</div>;
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      let allChars = [];
      for (let i = 1; i < 8; i++) {
        const reponse = await fetch(
          'https://rickandmortyapi.com/api/character/?page=' + i,
        );
        const data = await reponse.json();
        allChars = allChars.concat(data.results);
      }
      setCharacters(allChars);
    })();
    setLoading(false);
  }, []);

  return (
    <div id="apps">
      <header>
        <h1>Exercício API Rick & Morty - REACT</h1>
      </header>
      <main>
        <ul>
          {characters.map((character) => (
            <li className={"character-card-" + character.status.toLowerCase()} key={character.id}>
              <h2 className="character-title">{character.name}</h2>
              {checkImage(character.image, character.status)}
              <div className="character-description">
                <p>
                  <b>Status:</b>{' '}
                  {character.status === 'Dead' ? (
                    <span className="dead-text"> {character.status}</span>
                  ) : character.status === 'Alive' ? (
                    <span className="alive-text"> {character.status}</span>
                  ) : (
                    <span className="unknown-text"> {character.status}</span>
                  )}
                </p>
                <p>
                  <b>Specie:</b> <span>{character.species}</span>
                </p>
                <p>
                  <b>Gender:</b> <span>{character.gender}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App
