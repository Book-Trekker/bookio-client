import React from 'react'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'
import WishListCart from './WishListCart'
import book1 from '../../assets/images/wishlist/book1.png'
import book2 from '../../assets/images/wishlist/book2.png'
import Header from '../HomePage/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import { useGetWishListQuery } from '../../redux/features/wishlist/wishListApi'

const WishList = () => {
  const { data: wishListData } = useGetWishListQuery()
  // console.log(wishListData?.data)

  return (
    <section className='whishlist_page'>
      <Header />
      {/* breadCumb  */}
      <BreadCumb
        first={'Home'}
        second={'Wishlist'}
        route={'/wishlist'}
        MyAccount={'Wishlist'}
      />
      <div className='wisth_list_main p-5 md:p-10'>
        {wishListData?.data?.map((w, index) => (
          <WishListCart wishListDat={w} />
        ))}
      </div>
      <Footer />
    </section>
  )
}

export default WishList
