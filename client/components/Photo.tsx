interface Props {
  dogPhoto: string
  message: string
}

function Picture(props: Props) {
  return <img src={props.dogPhoto} alt={props.message} />
}

export default Picture
