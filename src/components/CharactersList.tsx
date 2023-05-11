import { useCharacters } from '../hooks/useCharacters'
import { CharacterCard } from './CharacterCard'

import { sortCharactersById } from '../utils/utils'

import { nanoid } from 'nanoid'

export const CharactersList = () => {
  const { error, loading, data } = useCharacters()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  const characters = data?.characters?.results?.slice(0, 6) || []
  const doubledCharacters = [...characters, ...characters]
  const charactersToShow = sortCharactersById(doubledCharacters)


  return (
    <div className="parent">
      {charactersToShow.map((character) => (
        <CharacterCard key={nanoid()} character={character} />
      ))}
    </div>
  )
}
