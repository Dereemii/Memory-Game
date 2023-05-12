type Props = {
  leftText: string
  rightText?: string
  matchted?: number
  turns?: number
}

export const CustomTitle = ({
  leftText,
  rightText,
  matchted = 0,
  turns = 0,
}: Props) => {
  const rightContent = rightText ? `${rightText} : ${turns}` : null

  return (
    <section className="title">
      <div className="title-left">
        {leftText}: {matchted}
      </div>
      <div className="title-right"> {rightContent} </div>
    </section>
  )
}
