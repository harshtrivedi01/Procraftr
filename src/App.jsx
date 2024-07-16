import './App.css'
import FAQ from './Component/FAQ/FAQ_Component'
import Navbar from './Component/Navbar/Navbar'
import Footer from'./Component/Footer/Footer'
import Home_first from './Component/Home/Home_first'
import Job_Search from './Component/Home/Job_Search'
import Resume_Guide from './Component/Home/Resume_Guide'
import Subscription from './Component/Home/Pay'

function App() {

  return (
    <>
   
    <Home_first/>
    <Job_Search/>
    <Subscription/>
    <Resume_Guide/>
     <FAQ/> 
     
    </>
  )
}

export default App
