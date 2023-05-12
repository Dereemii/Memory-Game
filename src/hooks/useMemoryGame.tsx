import { useCharacters } from '../hooks/useCharacters'
import { Characters } from '../types/Characters'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { setMatchedCharacters } from '../store/charactersSlice'



export const useMemoryGame = () => {
  const { loading, error } = useCharacters()
  const characters = useSelector(
    (state: RootState) => state.characters.characters
  )
  const dispatch = useDispatch()
  const [choiceOne, setChoiceOne] = useState<Characters | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<Characters | null>(null)
  const [turns, setTurns] = useState(0)

  const handleChoice = (character: Characters) => {
    choiceOne ? setChoiceTwo(character) : setChoiceOne(character)
  }

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.id === choiceTwo.id) {
        dispatch(setMatchedCharacters(choiceOne.id))
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [choiceOne, choiceTwo, dispatch])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
  }

  return {
    characters,
    handleChoice,
    turns,
    choiceOne,
    choiceTwo,
    loading,
    error,
  }
}
