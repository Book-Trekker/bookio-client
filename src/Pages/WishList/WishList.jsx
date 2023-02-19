import React from 'react'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'
import WishListCart from './WishListCart'
import book1 from '../../assets/images/wishlist/book1.png'
import book2 from '../../assets/images/wishlist/book2.png'

const WishList = () => {
  return (
    <section className='whishlist_page'>
        {/* breadCumb  */}
        <BreadCumb first={"Home"} second={"Wishlist"} route={"/wishlist"} MyAccount={"Wishlist"}  />
        <div className="wisth_list_main p-5 md:p-10">
            <WishListCart img={book1} title={"Inspiration Speaks"}/>
            <WishListCart img={book2} title={"The Art of Fashion"} />
        </div>
    </section>
  )
}

export default WishList