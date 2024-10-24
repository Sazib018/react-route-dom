import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Shared/Footer/Footer'
import Navbar from './components/Shared/Navbar/Navbar'


function App() {

  return (
    <div>
    <Navbar></Navbar>
    <div className='text-center max-w-[1200px] mx-auto'>
      <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default App
