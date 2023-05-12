import { CharacterCard, CustomTitle } from '.'
import { useMemoryGame } from '../hooks/useMemoryGame'
import { Characters } from '../types/Characters'

type Props = {
  isFlipped: boolean
}

export const GameContainer = ({ isFlipped }: Props) => {
  const {
    characters,
    handleChoice,
    turns,
    loading,
    error,
    choiceOne,
    choiceTwo,
  } = useMemoryGame()

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="cards-container">
      <CustomTitle leftText="Aciertos" rightText="Turnos" turns={turns} />
      <div className="card-grid">
        {characters.map((character: Characters) => {
          return (
            <CharacterCard
              key={character.key}
              character={character}
              handleChoice={handleChoice}
              isFlipped={isFlipped}
              flipped={
                character === choiceOne ||
                character === choiceTwo ||
                character.matched
              }
            />
          )
        })}
      </div>
    </div>
  )
}
