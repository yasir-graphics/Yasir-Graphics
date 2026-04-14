import { useState } from 'react'
import Navbar from './components/Navbar'
import FloatingWhatsApp from './components/FloatingWhatsApp'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Clients from './pages/Clients'
import Contact from './pages/Contact'

export default function App() {
  const [page, setPage] = useState('home')

  const render = () => {
    switch(page){
      case 'about': return <About/>
      case 'services': return <Services/>
      case 'portfolio': return <Portfolio/>
      case 'clients': return <Clients/>
      case 'contact': return <Contact/>
      default: return <Home setPage={setPage}/>
    }
  }

  return (
    <div>
      <Navbar setPage={setPage}/>
      {render()}
      <FloatingWhatsApp/>
    </div>
  )
}
