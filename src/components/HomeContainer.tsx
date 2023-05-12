import { CharacterCard, CustomTitle } from '.'
import { useMemoryGame } from '../hooks/useMemoryGame'
import { Characters } from '../types/Characters'
import { sortCharactersById } from '../utils/utils'

type Props = {
  isFlipped: boolean
}

export const HomeContainer = ({ isFlipped }: Props) => {
  const { characters, loading, error } = useMemoryGame()

  const sortedCharacters = sortCharactersById(characters)

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="cards-container">
      <CustomTitle leftText="Personajes" />
      <div className="card-grid">
        {sortedCharacters.map((character: Characters) => {
          return (
            <CharacterCard
              key={character.key}
              character={character}
              isFlipped={isFlipped}
            />
          )
        })}
      </div>
    </div>
  )
}
