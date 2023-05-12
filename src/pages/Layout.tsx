import { Header } from '../components/Header'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <main className='layout'>
      <Header />
      {children}
    </main>
  )
}
