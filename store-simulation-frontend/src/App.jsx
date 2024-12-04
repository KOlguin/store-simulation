import SaleChart from './components/saleChart'
import InventoryChart from './components/inventoryChart'
import './App.css'

function App() {
  return (
    <>
      <h1 className="principalTitle">Información de la Tienda</h1>
      <div className="principalDiv">
        <div className='chartsDiv'>
          <SaleChart />
        </div>
        <div className='chartsDiv'>
          <InventoryChart />
        </div>
      </div>
    </>
  )
}

export default App
