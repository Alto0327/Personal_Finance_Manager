import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Navigation/Sidebar'
import Budgeting from './pages/Budgeting'
import AandL from './pages/AandL'
import Dashboard from './pages/Dashboard'
import Payments from './pages/Payments'
import Report from './pages/Report'
import Savings from './pages/Savings'
import Transactions from './pages/Transactions'

function App() {
  
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path='/' element = {<Dashboard/>} />
            <Route path='/transactions' element = {<Transactions/>} />
            <Route path='/budgeting' element = {<Budgeting/>} />
            <Route path='/AandL' element = {<AandL/>} />
            <Route path='/savings' element = {<Savings/>} />
            <Route path='/Report' element = {<Report/>} />
            <Route path='/Payments' element = {<Payments/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
