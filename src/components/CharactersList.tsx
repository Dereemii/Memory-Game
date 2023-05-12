import { useCharacters } from '../hooks/useCharacters'
import { CharacterCard } from './CharacterCard'

import { Characters } from '../types/Characters'
import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useSortAndShuffleCharacters } from '../hooks/useSortAndShuffledCharacters'

type Props = {
  cardsSideBySide: boolean
  isFlipped: boolean
}

export const CharactersList = ({ cardsSideBySide, isFlipped }: Props) => {
  const [choiceOne, setChoiceOne] = useState<Characters | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<Characters | null>(null)

  const { loading, error } = useCharacters()
  const characters = useSelector(
    (state: RootState) => state.characters.characters
  )

  const { sortedAndShuffledCharacters } = useSortAndShuffleCharacters(
    characters,
    cardsSideBySide
  )

  const handleChoice = (character: Characters) => {
    choiceOne ? setChoiceTwo(character) : setChoiceOne(character)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.id === choiceTwo.id) {
        console.log('son iguales')
      } else {
        console.log('son diferentes')
      }
      setChoiceOne(null)
      setChoiceTwo(null)
    }
  }, [choiceOne, choiceTwo])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="card-grid">
      {sortedAndShuffledCharacters.map((character) => (
        <CharacterCard
          key={character.key}
          character={character}
          handleChoice={handleChoice}
          isFlipped={isFlipped}
        />
      ))}
    </div>
  )
}
