import React from 'react'

interface Props {
  text: string
}

function Subtitle(props: Props) {
  return (
    <div>
      <span>{props.text}</span>
    </div>
  )
}

export default Subtitle
