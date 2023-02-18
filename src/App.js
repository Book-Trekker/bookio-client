import { Route, Routes } from 'react-router-dom'
import AboutUs from './Pages/AboutUs/AboutUs'
import Account from './Pages/Account/Account'
import Contact from './Pages/Contact/Contact'
import Faq from './Pages/FAQ/Faq'
import Header from './Pages/HomePage/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import MobileMenu from './Pages/MobileMenu/MobileMenu'
import Author from './Pages/ProducctAuthor/Author'
import Shop from './Pages/Shop/Shop'
import StoreList from './Pages/StoreLIst/StoreList'
import Footer from './Shared/Footer/Footer'

function App() {
  return (
    <div className='root-component'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/author' element={<Author />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/store-list' element={<StoreList />}></Route>
        <Route path='/store-details' element={<Shop />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
      </Routes>
      <MobileMenu />
      <Footer />
    </div>
  )
}

export default App
