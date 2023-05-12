type Props = {
    turns: number
  }

export const GameOver = ({turns}: Props) => {    
  return (
    <div>GameOver {turns}</div>
  )
}
