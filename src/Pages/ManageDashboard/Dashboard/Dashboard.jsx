import { Avatar, Breadcrumbs, Button } from '@material-tailwind/react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <section className='w-full h-full'>
      <div className='grid grid-cols-12'>
        <div className='relative grid gap-4 col-span-2 bg-[#F5F7F6] h-screen p-2'>
          <div>
            <div className='flex items-center gap-x-3 border-b pb-3 border-gray border-opacity-50'>
              <Link to='/'>
                <Avatar
                  src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80'
                  alt='profile picture'
                  withBorder={true}
                  className='p-0.5'
                />
              </Link>
              <div>
                <h4 className='font-libre'>Welcome,</h4>
                <h2 className='font-libre font-bold'>Nazmul Hassan</h2>
              </div>
            </div>
            {/* sales count  */}
            <div className='flex items-center justify-between py-3 border-b border-gray border-opacity-50'>
              <div>
                <p className='font-bold text-gray'>Sales</p>
                <p className='font-bold flex justify-center items-center'>
                  456
                </p>
              </div>
              <div>
                <p className='font-bold text-gray'>Orders</p>
                <p className='font-bold flex justify-center items-center'>
                  456
                </p>
              </div>
              <div>
                <p className='font-bold text-gray'>Revenue</p>
                <p className='font-bold flex justify-center items-center'>
                  $2.13B
                </p>
              </div>
            </div>
            {/* menu List */}
            <div className='flex flex-col justify-center py-3'>
              {/* <Link to='/dashboard'>Home</Link>
              <Link to='/dashboard/products'>my Product</Link> */}
              <ul>
                <li className='py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40 flex items-center gap-x-2'>
                  <span>
                    <i class='ri-user-line'></i>
                  </span>{' '}
                  My Profile
                </li>
                <li className='py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40 flex items-center gap-x-2 '>
                  <span>
                    <i class='ri-currency-line'></i>
                  </span>{' '}
                  Orders
                </li>
                <li className='flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40'>
                  <span>
                    <i class='ri-folder-add-line'></i>
                  </span>{' '}
                  Create Product
                </li>
                <li className='flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40'>
                  <span>
                    <i class='ri-list-unordered'></i>
                  </span>{' '}
                  Manage Orders
                </li>
                <li className='flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40'>
                  <span>
                    <i class='ri-pages-line'></i>
                  </span>{' '}
                  Manage Products
                </li>
                <li className='flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40'>
                  <span>
                    <i class='ri-tools-fill'></i>
                  </span>{' '}
                  Manage Users
                </li>
                <li className='flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40'>
                  <span>
                    <i class='ri-bar-chart-line'></i>
                  </span>{' '}
                  Total Revenue
                </li>
                <li className='flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40'>
                  <span>
                    <i class='ri-exchange-dollar-line'></i>
                  </span>{' '}
                  Total Income
                </li>
                <li className='flex items-center gap-x-2 py-2 text-lg border-b-[1px] border-dotted hover:bg-[#00000012] border-gray border-opacity-40'>
                  <span>
                    <i class='ri-line-chart-line'></i>
                  </span>{' '}
                  Revenue Chart
                </li>
              </ul>
            </div>
            {/* log out button  */}
            <Button className='bg-primary hover:bg-secondary w-[95%] absolute bottom-2 left-1/2 transform -translate-x-1/2'>
              Log Out
            </Button>
          </div>
        </div>
        <div className='grid col-span-10 h-screen'>
          <div>
            <div className='bg-[#F5F7F6] h-16 p-2'>
              <h2 className='font-lato font-bold text-xl text-gray flex items-center gap-x-2'>
                {' '}
                <span>
                  <i class='ri-arrow-left-line text-blue-500 font-bold'></i>
                </span>{' '}
                Dashboard
              </h2>
              <Breadcrumbs className='bg-transparent m-0 p-0'>
                <Link to='/'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    viewBox='0 0 20 20'
                    fill='blue'
                  >
                    <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                  </svg>
                </Link>
                <h3 className='text-gray opacity-50'>Dashboard</h3>
              </Breadcrumbs>
            </div>
            <div className='p-3'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
