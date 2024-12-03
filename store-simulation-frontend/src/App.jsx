import SaleChart from './components/SaleChart'
import InventoryChart from './components/inventoryChart'
import './App.css'

function App() {
  return (
    <>
      <h1 className="principalTitle">Información de la Tienda</h1>
      <div className="principalDiv">
        <div>
          <SaleChart />
        </div>
        <div>
          <InventoryChart />
        </div>
      </div>
    </>
  )
}

export default App
