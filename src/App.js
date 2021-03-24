import React, { useState } from 'react'
import data from './data'
import ListComponents from "./components/ListComponents";
function App() {
  const [people, setPeople] = useState(data)

  function obrisi() {
    setPeople([])
  }
  return (
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <ListComponents people={people} />
          <button onClick={obrisi}>Clear All</button>
        </section>
      </main>
  )
}


export default App
