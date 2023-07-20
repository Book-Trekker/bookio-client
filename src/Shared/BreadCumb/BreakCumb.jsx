import React from 'react'
import { Breadcrumbs } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const BreakCumb = ({second, MyAccount, first, route}) => {
  return (
    <section className='breadCumb_section'>
      <div className='account_title px-10 py-6 bg-[#F0F3F8] grid grid-cols-1 md:grid-cols-2 items-center justify-center'>
        <Breadcrumbs className='w-full'>
          <Link to={'/'} className='opacity-60'>
            {first}
          </Link>
          {<Link to={route}>{second}</Link>}
        </Breadcrumbs>
        {MyAccount && <h2 className='text-lg md:text-2xl text-center font-bold font-libre text-black'>{MyAccount}</h2>}
      </div>
    </section>
  )
}

export default BreakCumb
