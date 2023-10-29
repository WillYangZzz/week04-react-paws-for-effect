import Dog from './Dog.tsx'

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" />
      <Dog name="Des" breed="Bulldog" superpower="Heat vision" />
      <Dog name="demona" breed="Bulldog" superpower="Heat vision" />
      <Dog name="Des" breed="Bulldog" superpower="Heat vision" />
    </div>
  )
}

export default App
