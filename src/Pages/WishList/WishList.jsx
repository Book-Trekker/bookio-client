import React from 'react'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'
import WishListCart from './WishListCart'

const WishList = () => {
  return (
    <section className='whishlist_page'>
        {/* breadCumb  */}
        <BreadCumb first={"Home"} second={"Wishlist"} route={"/wishlist"} MyAccount={"Wishlist"}  />
        <div className="wisth_list_main p-5 md:p-10">
            <WishListCart />
            <WishListCart />
        </div>
    </section>
  )
}

export default WishList