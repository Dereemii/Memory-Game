import { useCharacters } from '../hooks/useCharacters'
import { CharacterCard } from './CharacterCard'

import {
  duplicateCharacters,
  shuffleCharacters,
  sortCharactersById,
} from '../utils/utils'

import { Characters } from '../types/Characters'

import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

type Props = {
  cardsSideBySide: boolean
}

export const CharactersList = ({ cardsSideBySide }: Props) => {
  const [charactersToRender, setCharactersToRender] = useState<Characters[]>([])

  const { loading, error } = useCharacters()
  const characters = useSelector(
    (state: RootState) => state.characters.characters
  )

  useEffect(() => {
    setCharactersToRender(getCharactersToRender(characters, cardsSideBySide))
  }, [characters, cardsSideBySide])

  const getCharactersToRender = (characters: Characters[], layout: boolean) => {
    return layout
      ? sortCharactersById(characters)
      : shuffleCharacters(characters)
  }

  const handleChoice = (character: Characters) => {
    console.log(character)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="card-grid">
      {charactersToRender.map((character) => (
        <CharacterCard
          key={nanoid()}
          character={character}
          handleChoice={handleChoice}
        />
      ))}
    </div>
  )
}
