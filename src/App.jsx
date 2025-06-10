import './App.css'
import Banner from './Components/Banner/Banner'
import Banner2 from './Components/Banner2/Banner2'
import Banner3 from './Components/Banner3/Banner3'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Menus from './Components/Menus/Menus'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <main className='overflow-x-hidden'>
        <Navbar/>
        <Home/>
        <Menus/>
        <Banner/>
        <Banner2/>
        <Banner3/>
        <Footer/>
      </main>
    </>
  )
}

export default App
