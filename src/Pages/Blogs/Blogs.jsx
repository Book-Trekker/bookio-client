import React from 'react'
import Blog from './Blog'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'
import blogs1 from '../../assets/images/blogs/blogs1.png'
import blogs2 from '../../assets/images/blogs/blogs2.png'
import blogs3 from '../../assets/images/blogs/blogs3.png'
import blogs4 from '../../assets/images/blogs/blogs4.png'
import Header from '../HomePage/Header/Header'
import Footer from '../../Shared/Footer/Footer'

const Blogs = () => {
  return (
    <section className='blogs_section'>
      <Header />
      {/* breadCumb  */}
      <BreadCumb
        first={'Home'}
        second={'Blogs'}
        route={'/blogs'}
        MyAccount={'Blogs'}
      />
      {/* blogs section  */}
      <div className='blogs__ my-10 mx-5 md:mx-16'>
        <Blog img={blogs1} title={'Traveling Solo Is Awesome'} />
        <hr className='my-5 md:my-10 text-[#e2e2e2]' />
        <Blog img={blogs2} title={'A Beautiful Sunday Morning'} />
        <hr className='my-5 md:my-10 text-[#e2e2e2]' />
        <Blog img={blogs3} title={'Kitchen Inspired On Japanese'} />
        <hr className='my-5 md:my-10 text-[#e2e2e2]' />
        <Blog img={blogs4} title={'Lorem Ipsum Dolor Sit Amet Enim'} />
      </div>
      <Footer />
    </section>
  )
}

export default Blogs
