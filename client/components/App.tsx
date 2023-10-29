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
      <Subtitle text="Canines using super-canine abilities for social good." />
      <Dog
        name="Desdemona"
        breed="dachshund"
        superpower="Heat vision"
        image="/public/images/dachshund.png"
      />
      <Dog
        name={'Jonas'}
        breed={'Bulldog'}
        superpower={'sense of smell'}
        image="/public/images/bulldog.png"
      />
      <Dog
        name={'Vitor'}
        breed={'Dogue Brasileiro'}
        superpower={'trapper'}
        image="/public/images/hound.png"
      />
    </div>
  )
}

export default App
