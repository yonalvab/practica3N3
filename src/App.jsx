import { useEffect, useState } from 'react'
import { ListaLu } from './components/ListaLu'
import { DivTotals } from './components/DivTotals'

function App() {
  const [tip, setTip] = useState(null)
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(1)
  const [result, setResult] = useState({ tipTotal: '00.00', totalAmount: '00.00' })
  const allcalcular = () => {
    const tipResult = () => (bill * (tip / 100)) / people
    const totalResult = () => ((bill * (tip / 100)) + parseFloat(bill)) / people
    if (tip > 0 && bill > 0 && people > 0) {
      setResult({ tipTotal: tipResult(), totalAmount: totalResult() })
    }
  }
  useEffect(() => {
    allcalcular()
  }, [tip, people, bill])
  return (
    <>
      <header><img src="./logo.svg" alt="" /></header>
      <div className="general-wrapper">
        <div className="data-wrapper">
          <h1>Bill</h1>
          <label htmlFor="input-bill">
            <input className="input-bill" id="input-bill" type="number" value={bill}
              min="0" onChange={(e) => setBill(parseFloat(e.target.value))} />
          </label>
          <h2>Select Tip %</h2>
          <ListaLu tip={tip} setTip={setTip} />
          <h2>Number of People</h2>
          <label htmlFor="input-people">
            <input className="input-people" id="input-people" type="number" value={people}
              min="1" onChange={(e) => setPeople(parseInt(e.target.value))} />
          </label>
        </div>
        <div className="result-wrapper">
          <DivTotals tipTotal={result.tipTotal} totalAmount={result.totalAmount} />
          <button type="button" id="reset-button" className="reset-button">RESET</button>
        </div>
      </div>
    </>
  )
}

export default App
