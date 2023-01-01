import { Route, Routes } from 'react-router-dom'
import Account from './Pages/Account/Account'
import HomePage from './Pages/HomePage/HomePage'

function App() {
  return (
    <div className='root-component'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/account' element={<Account />}></Route>
      </Routes>
    </div>
  )
}

export default App
