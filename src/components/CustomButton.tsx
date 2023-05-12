import { Link } from 'react-router-dom'

type Props = {
  text: string
  link: string
  style: string
}

export const CustomButton = ({ text, link, style }: Props) => {

  return (
    <Link to={link} className={style}>
      <button >{text}</button>
    </Link>
  )
}
