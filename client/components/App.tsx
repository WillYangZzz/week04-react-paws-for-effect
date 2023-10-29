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
      <Subtitle text="Canines using super-canine abilities for social good." />
      <Dog name="Desdemona" breed="bulldog" superpower="Heat vision" />
      <Dog name="Bull-terrier" breed="greyhound" superpower="Venom" />
    </div>
  )
}

export default App
