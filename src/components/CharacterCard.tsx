import { Characters } from '../types/Characters'

import cover from '../assets/images/card-back-image.png'
import { memo } from 'react'

type Props = {
  character: Characters
  handleChoice: (character: Characters) => void
}

export const CharacterCard = memo( ({ character, handleChoice }: Props) => {
  const handleClick = () => {
    handleChoice(character)
  }

  return (
    <div className="card">
      <div className="card-style front">
        <img src={character.image} alt={character.name} className="card-img" />
        <div className="card-name">{character.name}</div>
        <div className="card-description">
          {character.status} - {character.species}
        </div>
      </div>
      <div className="card-style back" onClick={handleClick}>
        <img src={cover} alt="card back" />
      </div>
    </div>
  )
}
)