import { useCharacters } from '../hooks/useCharacters'
import { CharacterCard } from './CharacterCard'

import {
  duplicateCharacters,
  shuffleCharacters,
  sortCharactersById,
} from '../utils/utils'

import { Characters } from '../types/Characters'

import { nanoid } from 'nanoid'

type Props = {
  cardsSideBySide: boolean
}

export const CharactersList = ({ cardsSideBySide }: Props) => {
  const { error, loading, data } = useCharacters()
  const characters = data?.characters?.results?.slice(0, 6) || []

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  const getCharactersToRender = (characters: Characters[], layout: boolean) => {
    const charactersToRender = duplicateCharacters(characters)
    return layout ? sortCharactersById(charactersToRender) : shuffleCharacters(charactersToRender)
  }

  const charactersToRender = getCharactersToRender(characters, cardsSideBySide)

  return (
    <div className="parent">
      {charactersToRender.map((character) => (
        <CharacterCard key={nanoid()} character={character} />
      ))}
    </div>
  )
}
