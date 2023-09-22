import React from 'react'
import { Breadcrumbs } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const BreakCumb = ({second, MyAccount, first, route}) => {
  return (
    <section className='breadCumb_section'>
      <div className='account_title px-5 py-6 bg-[#F0F3F8] grid grid-cols-2 justify-between items-center'>
        <Breadcrumbs className='w-full brd-text'>
          <Link to={'/'} className='opacity-60'>
            {first}
          </Link>
          {<Link to={route}>{second}</Link>}
        </Breadcrumbs>
        {MyAccount && <h2 className='text-lg md:text-2xl text-right font-bold font-libre text-black brd-text'>{MyAccount}</h2>}
      </div>
    </section>
  )
}

export default BreakCumb
