import React from 'react'

const Blog = ({img, title}) => {
  return (
    <section className=''>
      <div className='w-full h-screen relative'>
        <img className='w-full h-full' src={img} alt='blogs/img' />
        <div className='absolute bottom-5 left-5'>
          <div className='flex gap-2'>
            <button className='px-5 py-2 bg-primary hover:bg-black text-white text-[12px] font-libre'>
              BACPACK
            </button>
            <button className='px-5 py-2 bg-primary hover:bg-black text-white text-[12px] font-libre'>
              FASHION
            </button>
            <button className='px-5 py-2 bg-primary hover:bg-black text-white text-[12px] font-libre'>
              LIFE STYLE
            </button>
          </div>
        </div>
      </div>
      {/* blogs details  */}
      <div className='blog_details my-3'>
        <div>
          <p className='text-gray'>
            <span className='flex items-center'>
              <i class='ri-calendar-event-line'></i> &nbsp;August 18, 2021
              &nbsp;/&nbsp;
              <span>
                <i class='ri-user-2-line'></i> &nbsp;Nazmul H. &nbsp;/ &nbsp;
              </span>
              <span>
                &nbsp;<i class='ri-discuss-line'></i> &nbsp;9 Comments
              </span>
            </span>
          </p>
          <h1 className='text-2xl md:text-4xl text-primary font-libre font-bold py-2'>
            {title}
          </h1>
          <p className='text-gray py-2'>
            sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero,
            non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor.
            Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum
            aliquam libero, non adipiscing dolor urna a orci. non, velit. Etiam
            rhoncus. Nunc interdum lacus sit amet orci....
          </p>
          <button className='px-5 py-2 bg-black hover:bg-primary text-white font-lato mt-3'>READ MORE</button>
        </div>
      </div>
    </section>
  )
}

export default Blog
