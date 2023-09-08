import { Route, Routes } from 'react-router-dom'
import AboutUs from './Pages/AboutUs/AboutUs'
import Account from './Pages/Account/Account'
import Blogs from './Pages/Blogs/Blogs'
import Contact from './Pages/Contact/Contact'
import Faq from './Pages/FAQ/Faq'
import HomePage from './Pages/HomePage/HomePage'
import MobileMenu from './Pages/MobileMenu/MobileMenu'
import Author from './Pages/ProducctAuthor/Author'
import Shop from './Pages/Shop/Shop'
import StoreList from './Pages/StoreLIst/StoreList'
import WishList from './Pages/WishList/WishList'
import SignUp from './Pages/Sign_up/SignUp'
import SignIn from './Pages/SignIn/SignIn'
import SingleBooks from './Pages/Shop/Singlebooks/SingleBooks'
import { Dashboard } from './Pages/ManageDashboard/Dashboard/Dashboard'
import Products from './Pages/ManageDashboard/Product/Products'
import UserProfile from './Pages/ManageDashboard/UserProfile/UserProfile'
import Orders from './Pages/ManageDashboard/Orders/Orders'
import CreateProduct from './Pages/ManageDashboard/CreateProduct/CreateProduct'
import ManageOrders from './Pages/ManageDashboard/ManageOrders/ManageOrders'
import ManageProducts from './Pages/ManageDashboard/ManageProducts/ManageProducts'
import ManageUsers from './Pages/ManageDashboard/ManageUsers/ManageUsers'
import Chart from './Pages/ManageDashboard/Chart/Chart'
import Income from './Pages/ManageDashboard/Income/Income'
import Revenue from './Pages/ManageDashboard/Revenue/Revenue'
import Card from "./Pages/Card/Card";
import Checkout from "./Pages/Checkout/Checkout";
import OrderTracking from "./Pages/OrderTracking/OrderTracking";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const id = localStorage.getItem("id");
  //   dispatch(loadUserThunk(id));
  // }, [dispatch]);

  return (
    <div className='root-component'>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/sign_up' element={<SignUp />}></Route>
        <Route path='/sign_in' element={<SignIn />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/shop/book/:id' element={<SingleBooks />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/author' element={<Author />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
        <Route path='/store-list' element={<StoreList />}></Route>
        <Route path='/store-details' element={<Shop />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/wishlist' element={<WishList />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>

        {/* dashboard  */}

        <Route path='/dashboard' element={<Dashboard />}>
          {/* Nested Route */}
          <Route index element={<UserProfile />} />
          <Route path='orders' element={<Orders />} />
          <Route path='manage-product' element={<Products />} />
          <Route path='create-product' element={<CreateProduct />} />
          <Route path='manage-orders' element={<ManageOrders />} />
          <Route path='manage-products' element={<ManageProducts />} />
          <Route path='manage-users' element={<ManageUsers />} />
          <Route path='revenue' element={<Revenue />} />
          <Route path='income' element={<Income />} />
          <Route path='revenue-chart' element={<Chart />} />
        </Route>

        {/* dashboard  */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/sign_up" element={<SignUp />}></Route>
        <Route path="/sign_in" element={<SignIn />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Card />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/order-tracking" element={<OrderTracking />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/author" element={<Author />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/store-list" element={<StoreList />}></Route>
        <Route path="/store-details" element={<Shop />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
      <MobileMenu />
      {/* <Footer /> */}
    </div>
  )
}

export default App
