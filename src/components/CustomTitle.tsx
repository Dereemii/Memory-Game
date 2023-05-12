type Props = {
  leftText: string
  rightText?: string
  matchted?: number
  turns?: number
}

export const CustomTitle = ({
  leftText,
  rightText,
  matchted,
  turns,
}: Props) => {

  return (
    <section className="title">
      <div className="title-left">{leftText}: {matchted}</div>
      <div className="title-right"> {rightText} {turns} </div>
    </section>
  )
}
