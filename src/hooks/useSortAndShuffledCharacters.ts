import { useEffect, useState } from 'react'
import { shuffleCharacters, sortCharactersById } from '../utils/utils'
import { Characters } from '../types/Characters'

export const useSortAndShuffleCharacters = (
  characters: Characters[],
  cardsSideBySide: boolean
) => {
  const [sortedAndShuffledCharacters, setSortedAndShuffledCharacters] =
    useState<Characters[]>([])

  useEffect(() => {
    const sortedCharacters = sortCharactersById(characters)
    const shuffledCharacters = shuffleCharacters(characters)
    const charactersToRender = cardsSideBySide
      ? sortedCharacters
      : shuffledCharacters
    setSortedAndShuffledCharacters(charactersToRender)
  }, [characters, cardsSideBySide])

  return { sortedAndShuffledCharacters }
}
