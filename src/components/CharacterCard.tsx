import { Characters } from '../types/Characters'

type Props = {
  character: Characters
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <div>
      <img src={character.image} alt={character.name} className="img-card" />
      <div>{character.name}</div>
      <div>{character.status}</div>
      <div>{character.species}</div>
    </div>
  )
}
