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

function Card({character}) {


  return (
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
  )
}


{/*  */ }


export default Card;