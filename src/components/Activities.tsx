type Props = {
  filter: string
}

export const Activities = ({ filter }: Props) => {
  return (
    <p>
      Viewing activities under filter:{" "}
      <span className="font-bold uppercase">{filter}</span>
    </p>
  )
}
