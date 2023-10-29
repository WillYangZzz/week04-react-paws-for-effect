import Dog from './Dog.tsx'
import Subtitle from './Subtitle.tsx'

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Subtitle text="The biggest and baddest dogs in the world" />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
      <Dog name="Vitor" breed="Greyhound" superpower="Running fast" />
      <Dog name="Samir" breed="Scottie" superpower="Can speak" />
    </div>
  )
}

export default App
