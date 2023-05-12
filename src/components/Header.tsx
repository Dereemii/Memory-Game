import { Link } from 'react-router-dom'

import logo from '../assets/images/rick-morty-logo.svg'

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          src={logo}
          alt="Logo de Ricky & Morty"
          className="img-logo"
        />
      </Link>
      <h1>Juego de Memoria</h1>
    </header>
  )
}
