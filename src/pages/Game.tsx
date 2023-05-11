import { CharactersList } from '../components/CharactersList'

export const Game = () => {
  return (
    <div>
      <h1>juego de memoria</h1>
      <span>ACIERTOS</span> <span>TURNOS</span>
      <CharactersList />
    </div>
  )
}
