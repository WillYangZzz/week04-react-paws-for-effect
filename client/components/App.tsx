import Dog from './Dog'
import Subtitle from './Subtitle'

function App() {
  return (
    <>
      <div className="container">
        <img
          className="spinner"
          alt="a spinning paw-print"
          src="/images/paw.png"
        />
        <Subtitle text="Canines using super-canine abilities for social good." />
        <Dog
          name="Desdemona"
          breed="Bulldog"
          superpower="Heat vision"
          img="/images/bull-terrier.png"
        />
        <Dog
          name="Mm"
          breed="Keri"
          superpower="Legs"
          img="/images/bulldog.png"
        />
        <Dog
          name="Happy"
          breed="Golden"
          superpower="Buiding"
          img="/images/greyhound.png"
        />
      </div>
    </>
  )
}

export default App
