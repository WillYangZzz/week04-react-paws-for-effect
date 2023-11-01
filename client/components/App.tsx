import Dog from './Dog'
import Subtitle from './Subtitle'

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Dog
        name="Tarzan"
        breed="Chihuahua"
        superpower="Teleportation"
        image="/images/scottie.png"
      />
      <Subtitle text="Loves to swing around the trees and teleport if he falls." />
      <Dog
        name="Lazarus"
        breed="Chihuahua"
        superpower="Revival"
        image="/images/scottie.png"
      />
      <Subtitle text="Frequently comes back from the dead." />
      <Dog
        name="Mathilda"
        breed="Chihuahua"
        superpower="Telekinesis"
        image="/images/scottie.png"
      />
      <Dog
        name="Imelda"
        breed="Chihuahua"
        superpower="Shoemaking"
        image="/images/scottie.png"
      />
      <Dog
        name="Alice"
        breed="Chihuahua"
        superpower="World building"
        image="/images/scottie.png"
      />
    </div>
  )
}

export default App
