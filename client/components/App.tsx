import Dog from './Dog'

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Dog name="Tarzan" breed="Chihuahua" superpower="Teleportation" />
      <Dog name="Lazarus" breed="Chihuahua" superpower="Revival" />
      <Dog name="Mathilda" breed="Chihuahua" superpower="Telekinesis" />
      <Dog name="Imelda" breed="Chihuahua" superpower="Shoemaking" />
      <Dog name="Alice" breed="Chihuahua" superpower="World building" />
    </div>
  )
}

export default App
