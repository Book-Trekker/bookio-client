import { Route, Routes } from 'react-router-dom'
import Account from './Pages/Account/Account'
import Header from './Pages/HomePage/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import Shop from './Pages/Shop/Shop'
import Footer from './Shared/Footer/Footer'

function App() {
  return (
    <div className='root-component'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
