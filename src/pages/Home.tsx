import { CustomButton } from '../components/CustomButton'
import { HomeContainer } from '../components/HomeContainer'
import { Layout } from './Layout'

export const Home = () => {
  return (
    <Layout>
      <HomeContainer isFlipped={false} />
      <CustomButton text="Jugar" link="/game" style="button" />
    </Layout>
  )
}
