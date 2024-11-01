
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './components/Navber/Navber'

function App() {


  return (
    <>
 <Navber></Navber>
 <Outlet></Outlet>
    </>
  )
}

export default App
