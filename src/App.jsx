import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home';
import About from './assets/component/About';
import './index.css';
import Committee from './assets/component/Committee';
import Events from './assets/component/Events'
import Membership from './assets/component/Menbership'
import Contact from './assets/component/Contact'

const App = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>}/ >
       <Route path='/about' element={<About/>} />
       <Route path='/committee' element={<Committee/>} />
       <Route path='/events' element={<Events/>} />
       <Route path='/membership' element={<Membership/>}/>
       <Route path='/contact' element={<Contact/>}/>
    </Routes>
  )
}

export default App