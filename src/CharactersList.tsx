import { useCharacters } from './hooks/useCharacters'
import { nanoid } from "nanoid";
import { Characters } from './types/Characters';

export const CharactersList = () => {
  const { error, loading, data } = useCharacters()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  const dataToShow = data.characters.results.slice(0, 6)
  const doubleData = [...dataToShow, ...dataToShow]

  return (
    <>
      <div className="parent">
        {doubleData.map((character: Characters) => (
          <div className="child" key={nanoid()}>
            <img src={character.image} alt={character.name} className='img-card'/>
            <div>{character.name}</div>
            <div>{character.status}</div>
            <div>{character.species}</div>
          </div>
        ))}
      </div>
    </>
  )
}
