
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Account from "./Pages/Account/Account";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Faq from "./Pages/FAQ/Faq";
import HomePage from "./Pages/HomePage/HomePage";
import MobileMenu from "./Pages/MobileMenu/MobileMenu";
import Author from "./Pages/ProducctAuthor/Author";
import Shop from "./Pages/Shop/Shop";
import StoreList from "./Pages/StoreLIst/StoreList";
import WishList from "./Pages/WishList/WishList";
import SignUp from "./Pages/Sign_up/SignUp";
import SignIn from "./Pages/SignIn/SignIn";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const id = localStorage.getItem("id");
  //   dispatch(loadUserThunk(id));
  // }, [dispatch]);

  return (
    <div className="root-component">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/sign_up" element={<SignUp />}></Route>
        <Route path="/sign_in" element={<SignIn />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
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
  );
}

export default App;
