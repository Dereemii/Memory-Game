import { useCharacters } from '../hooks/useCharacters'
import { CharacterCard } from './CharacterCard'

import { sortCharactersById } from '../utils/utils'

import { nanoid } from 'nanoid'

type Props = {
  sideBySide?: boolean
}

export const CharactersList = ({ sideBySide }: Props) => {
  const { error, loading, data } = useCharacters()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  const characters = data?.characters?.results?.slice(0, 6) || []
  let charactersToRender = [...characters, ...characters]

  if (sideBySide) {
    charactersToRender = sortCharactersById(charactersToRender)
  } else {
    charactersToRender.sort(() => Math.random() - 0.5)
  }

  return (
    <div className="parent">
      {charactersToRender.map((character) => (
        <CharacterCard key={nanoid()} character={character} />
      ))}
    </div>
  )
}
