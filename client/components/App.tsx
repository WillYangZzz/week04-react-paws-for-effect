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
      <>
        <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
        <img src="/images/bulldog.png" alt="A bulldog" />
      </>
      <Dog name="Des" breed="Bulldog" superpower="Heat vision" />
      <Dog name="demona" breed="Bulldog" superpower="Heat vision" />
      <Dog name="Des" breed="Bulldog" superpower="Heat vision" />
    </div>
  )
}

export default App
