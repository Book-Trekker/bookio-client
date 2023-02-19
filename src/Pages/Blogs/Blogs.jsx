import React from 'react'
import Blog from './Blog'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'

const Blogs = () => {
  return (
    <section className='blogs_section'>
      {/* breadCumb  */}
      <BreadCumb
        first={'Home'}
        second={'Blogs'}
        route={'/blogs'}
        MyAccount={'Blogs'}
      />
      {/* blogs section  */}
      <div className='blogs__ my-10 mx-16'>
        <Blog />
      </div>
    </section>
  )
}

export default Blogs
