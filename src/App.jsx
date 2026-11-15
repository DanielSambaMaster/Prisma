import Sidebar from './Components/Sidebar/Siderbar'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home'

function App() {

  return (
    <>
    <section className="container">
      
      <div><Sidebar/> </div>
      <div className="header-container-content">
       <div><Header/></div>
      
      
      <div><Home/></div>
      </div>
    </section>
    </>
  )
}

export default App
