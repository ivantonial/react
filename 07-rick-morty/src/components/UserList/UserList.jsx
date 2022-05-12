import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Loading from '../Loading/Loading'


function UserList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const asyncCheck = async () => {
    setLoading(true);
    let allChars = [];
    for (let i = 1; i < 42; i++) {
      const response = await fetch(
        'https://rickandmortyapi.com/api/character/?page=' + i,
      );
      const data = await response.json();
      allChars = allChars.concat(data.results);
    }
    setCharacters(allChars);
    setLoading(false);
  }

  useEffect(() => {
    asyncCheck();
  }, []);

  return (

    <ul>
      {loading === true ? <Loading /> :
        characters.map((character) => (
          <Card character={character} />
        ))
      }
    </ul>

  );
}


export default UserList;