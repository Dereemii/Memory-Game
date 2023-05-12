import { CharactersList } from '../components/CharactersList'
import { CustomButton } from '../components/CustomButton'
import { CustomTitle } from '../components/CustomTitle'
import { Layout } from './Layout'

export const Home = () => {
  return (
    <Layout>
      <div className="yellow">
        <CustomTitle leftText="Personajes"  />
        <CharactersList cardsSideBySide flipCards={false} />
        <CustomButton text="Jugar" link="/game" style="button" />
      </div>
    </Layout>
  )
}
