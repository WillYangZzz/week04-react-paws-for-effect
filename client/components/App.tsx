import Dog from './Dog.tsx'
import Subtitle from './Subtitle.tsx'
import Picture from './Photo.tsx'

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Picture dogPhoto="/images/bulldog.png" message="A Bulldog" />
      <Subtitle text="Canines using super-canine abilities for social good" />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
      <Picture dogPhoto="/images/scottie.png" message="A Scottie" />
      <Dog name="Bear" breed="German Shepherd X" superpower="Talks" />
      <Picture dogPhoto="/images/dachshund.png" message="A Dachshund" />
      <Dog name="Oreo" breed="Who knows?" superpower="Being Dumb" />
    </div>
  )
}

export default App
