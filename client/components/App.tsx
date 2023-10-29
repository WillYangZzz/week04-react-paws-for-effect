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
      <Dog name="Bull-terrier" breed="Bulldog" superpower="Venom" />
    </div>
  )
}

export default App
