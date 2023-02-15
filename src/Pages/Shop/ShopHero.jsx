import React from 'react'
import BreakCumb from '../../Shared/BreadCumb/BreakCumb'
import bannerImg from '../../assets/images/shop/hero/banner-shop.png'
import catImg from '../../assets/images/shop/hero/bg-cate-4.png'
import catImg2 from '../../assets/images/shop/hero/bg-cate-1.png'
import catImg3 from '../../assets/images/shop/hero/bg-cate-2.png'
import catImg4 from '../../assets/images/shop/hero/bg-cate-3.png'
import './Shop.css'
import ShopBasicCategory from './ShopBasicCategory'

const ShopHero = () => {
  return (
    <section className='shop_section'>
      <div className='shop_main'>
        <div className='breakCumb'>
          <BreakCumb first={'Home'} second={'Shop'} route={'/shop'} />
        </div>
        <div className='shop_hero_main p-5 md:p-10'>
          <div
            style={{ backgroundImage: `url(${bannerImg})` }}
            className='shop_cover w-full h-96 md:h-80 relative text-center bg-no-repeat bg-center bg-cover'
          >
            <div className='shop_hero_content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <h2
                className='text-3xl md:text-5xl text-primary
              font-libre font-bold leading-[40px] md:leading-[60px]'
              >
                Book Your Own <br></br> Adventures
              </h2>
              <p className='py-5 font-libre font-semibold text-primary'>
                MORE BANG FOR YOUR BOOKS
              </p>
              <button className='px-8 py-2 bg-primary text-white font-libre font-bold'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className='shop_basic_category p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          <ShopBasicCategory
            ctTitle={'Adventure'}
            catImg={catImg}
            bCategory1={'Case Closed'}
            bCategory2={'Final Flight'}
            bCategory3={'Piano Adventures'}
            bCategory4={'Viking Adventures'}
          />
          <ShopBasicCategory
            ctTitle={'Classic Fiction'}
            catImg={catImg2}
            bCategory1={'Jane Eyre'}
            bCategory2={'Mystery'}
            bCategory3={'Pride & Prejudice'}
            bCategory4={'Science Fiction'}
            bCategory5={'The Alchemist'}
            bCategory6={'Thriller & Suspense'}
          />
          <ShopBasicCategory
            ctTitle={'Fantasy'}
            catImg={catImg3}
            bCategory1={'Blood And Ash'}
            bCategory2={'Legendborn'}
            bCategory3={'Monster Hunters'}
            bCategory4={'The Atlas Series'}
            bCategory5={'The Shadow'}
            bCategory6={'The Witcher'}
          />
          <ShopBasicCategory
            ctTitle={'Modern Fiction'}
            catImg={catImg4}
            bCategory1={'A Carolina Chronicles'}
            bCategory2={'A Dewey Andreas'}
            bCategory3={'Hades X Persephone'}
            bCategory4={'Logans'}
            bCategory5={'The Hunted Series'}
          />
        </div>
      </div>
    </section>
  )
}

export default ShopHero
