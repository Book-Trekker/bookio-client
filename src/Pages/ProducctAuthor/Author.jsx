import BreakCumb from '../../Shared/BreadCumb/BreakCumb'
import React from 'react'
import author1 from '../../assets/images/author/author-1.png'
import author2 from '../../assets/images/author/author-2.png'
import author3 from '../../assets/images/author/author-3.png'
import author4 from '../../assets/images/author/author-4.png'
import author5 from '../../assets/images/author/author-5.png'
import author6 from '../../assets/images/author/author-6.png'
import Header from '../HomePage/Header/Header'
import Footer from '../../Shared/Footer/Footer'

const Author = () => {
  return (
    <section className='product_author w-full'>
      <Header />
      {/* breadcumb  */}
      <div className='breadCumb'>
        <BreakCumb
          first={'home'}
          second={'author'}
          route={'/author'}
          MyAccount={'Product Author'}
        />
      </div>
      <div className='author_main p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        <div className='text-center cursor-pointer'>
          <img className='p-3' src={author1} alt='author/img' />
          <h2 className='text-2xl text-primary font-bold font-libre'>
            Alec Hansen
          </h2>
          <p className='text-gray font-lato'>4 Published Book</p>
        </div>
        <div className='text-center cursor-pointer'>
          <img className='p-3' src={author2} alt='author/img' />
          <h2 className='text-2xl text-primary font-bold font-libre'>
            Alyce Kris
          </h2>
          <p className='text-gray font-lato'>4 Published Book</p>
        </div>
        <div className='text-center cursor-pointer'>
          <img className='p-3' src={author3} alt='author/img' />
          <h2 className='text-2xl text-primary font-bold font-libre'>
            Glenna Berge
          </h2>
          <p className='text-gray font-lato'>5 Published Book</p>
        </div>
        <div className='text-center cursor-pointer'>
          <img className='p-3' src={author5} alt='author/img' />
          <h2 className='text-2xl text-primary font-bold font-libre'>
            Norene Mayert
          </h2>
          <p className='text-gray font-lato'>2 Published Book</p>
        </div>
        <div className='text-center cursor-pointer'>
          <img className='p-3' src={author4} alt='author/img' />
          <h2 className='text-2xl text-primary font-bold font-libre'>
            Sabela Hupter
          </h2>
          <p className='text-gray font-lato'>5 Published Book</p>
        </div>
        <div className='text-center cursor-pointer'>
          <img className='p-3' src={author6} alt='author/img' />
          <h2 className='text-2xl text-primary font-bold font-libre'>
            Seamus Rosenbaum
          </h2>
          <p className='text-gray font-lato'>5 Published Book</p>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Author
