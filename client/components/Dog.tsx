interface Props {
  name: string
  breed: string
  superpower: string
  image: string
}

function Dog(props: Props) {
  return (
    <div className="dog-wrapper">
      <div className="dog">
        <div className="dog-name-plate">
          <span className="dog-name">{props.name}</span>
          <span className="dog-breed">{props.breed}</span>
        </div>
        <img src={props.image} alt="A chihuahua dressed as a scottie" />
        <span className="dog-superpower">{props.superpower}</span>
      </div>
    </div>
  )
}

export default Dog
