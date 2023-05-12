import { useState } from 'react'
import { CharactersList } from '../components/CharactersList'
import { CustomTitle } from '../components/CustomTitle'
import { Layout } from './Layout'

export const Game = () => {
  const [turns, setTurns] = useState(0)
  const [matched, setMatched] = useState(0)

  return (
    <Layout>
      <div className="yellow">
        <CustomTitle
          leftText="Aciertos"
          matchted={matched}
          rightText="Turnos"
          turns={turns}
        />
        <CharactersList cardsSideBySide={false} flipCards />
      </div>
    </Layout>
  )
}
