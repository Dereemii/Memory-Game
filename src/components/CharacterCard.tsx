import { Characters } from '../types/Characters'

import cover from '../assets/images/card-cover.png'

type Props = {
  character: Characters
  handleChoice: (character: Characters) => void
  isFlipped: boolean
}

export const CharacterCard = ({
  character,
  handleChoice,
  isFlipped,
}: Props) => {
  const handleClick = () => {
    handleChoice(character)
  }

  return (
    <div className="card">
      <div className={`card-style ${isFlipped ? 'front' : ''}`}>
        <img src={character.image} alt={character.name} className="card-img" />
        <div className="card-name">{character.name}</div>
        <div className="card-description">
          {character.status} - {character.species}
        </div>
      </div>
      {isFlipped && (
        <div className="card-style back" onClick={handleClick}>
          <img src={cover} alt="card back" />
        </div>
      )}
    </div>
  )
}
