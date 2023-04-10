import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import User from './components/User'
import Filter from './components/Filter'
import About from './components/About'
import Contact from './components/Contact'
import Company from './components/Company'
import Other from './components/Other'
import Channel from './components/Channel'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/user/:name' element={<User />}></Route>
          <Route path='/*' element={<Navigate to='/' />}></Route>
          <Route path='/filter' element={<Filter />}></Route>
          <Route path='/contact' element={<Contact />}>
            <Route  path='comapany' element={<Company />}></Route>
            <Route path='other' element={<Other />}></Route>
            <Route path='channel' element={<Channel />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
