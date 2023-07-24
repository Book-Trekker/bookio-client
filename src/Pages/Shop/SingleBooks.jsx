import React, { useEffect, useState } from 'react'
import Header from '../HomePage/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'
import { Button } from '@material-tailwind/react'
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react'

const SingleBooks = () => {
  const [qty, setQty] = useState(0)

  const handleIncrease = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const handleDecrease = () => {
    setQty((prevQty) => Math.max(prevQty - 1, 0))
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value)
    setQty(isNaN(value) ? 0 : value)
  }

  //   day counter
  // New state for target date and remaining time
  const [targetDate, setTargetDate] = useState(() => {
    const storedTargetDate = localStorage.getItem('targetDate')
    return storedTargetDate ? new Date(storedTargetDate) : null
  })

  // Function to calculate remaining time between now and the target date
  const calculateRemainingTime = () => {
    if (targetDate) {
      const now = new Date().getTime()
      const targetTime = targetDate.getTime()
      const timeDiff = targetTime - now

      if (timeDiff > 0) {
        const days = Math.floor(timeDiff / (1000 * 3600 * 24))
        const hours = Math.floor(
          (timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)
        )
        const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60))
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

        return { days, hours, minutes, seconds }
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [remainingTime, setRemainingTime] = useState(() => {
    return targetDate
      ? calculateRemainingTime()
      : { days: 0, hours: 0, minutes: 0, seconds: 0 }
  })

  // Effect to update localStorage when target date or remaining time changes
  useEffect(() => {
    if (targetDate) {
      localStorage.setItem('targetDate', targetDate.toISOString())
    } else {
      localStorage.removeItem('targetDate')
    }
    localStorage.setItem('remainingTime', JSON.stringify(remainingTime))
  }, [targetDate, remainingTime])

  // Effect to start timer when target date is selected
  useEffect(() => {
    let timer
    if (targetDate) {
      timer = setInterval(() => {
        const time = calculateRemainingTime()
        setRemainingTime(time)
      }, 1000)
    }

    return () => {
      clearInterval(timer)
    }
  }, [targetDate])

  // Handle date selection
//   const handleDateChange = (event) => {
//     const selectedDate = event.target.value
//     const target = new Date(selectedDate)
//     setTargetDate(target)
//   }

  // Handle date and time selection
  const handleDateTimeChange = (event) => {
    const selectedDateTime = event.target.value
    const target = new Date(selectedDateTime)
    setTargetDate(target)
  }
  //  END  day counter

  //   review section
  const [activeTab, setActiveTab] = React.useState('Description')
  const data = [
    {
      label: 'Description',
      value: 'Description',
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: 'Reviews (0)',
      value: 'Reviews',
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: 'Vendor Info',
      value: 'vendorInfo',
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: 'More Products',
      value: 'MoreProducts',
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ]

  return (
    <>
      <Header />
      <BreadCumb
        first={'Home'}
        second={'shop'}
        route={'/shop'}
        MyAccount={'Book Details'}
      />
      {/* single books section  */}
      <div className='my-10 px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          {/* product image  */}
          <div className='p-4'>
            <img
              src='https://wpbingosite.com/wordpress/bookio/wp-content/webp-express/webp-images/uploads/2018/05/Image-10.jpg.webp'
              alt=''
            />
          </div>
          {/* product details  */}
          <div className='pl-4 pt-4 pb-4'>
            {/* title & price information  */}
            <div>
              <h1 className='text-primary text-2xl font-libre font-bold'>
                Castle In The Sky
              </h1>
              <p className='text-gray py-1'>
                Brand: <span className='text-primary'>Dental</span>{' '}
              </p>
              <p className='text-gray text-2xl font-libre font-bold py-2'>
                <span className='line-through'>$300.00</span>
                <span className='text-black pl-2'>$280.0</span>{' '}
              </p>
              <hr className='text-gray opacity-30 my-2' />
              <p className='font-lato'>
                Sold By: <span className='text-primary'>BOOKIO</span>{' '}
              </p>
            </div>
            {/* category information  */}
            <div className='pl-3 pt-3'>
              <p className='relative triangle_icon pl-3 text-sm text-gray'>
                For Kids
              </p>
              <p className='relative triangle_icon pl-3 text-sm text-gray'>
                First Published In 2014
              </p>
              <p className='relative triangle_icon pl-3 text-sm text-gray'>
                Copyright By Bookio
              </p>
              <hr className='text-gray opacity-30 my-4' />
            </div>

            {/* offer time  */}
            <div className='flex flex-wrap items-center gap-3'>
              <div>
                <h4 className='font-libre font-bold'>HUNGRY UP!</h4>
                <p className='font-lato text-gray'>Offer end in: </p>
              </div>
              <div className='flex justify-center items-center gap-3'>
                <div className='flex flex-col justify-center items-center'>
                  <span className='bg-primary rounded-full p-3 text-white font-bold font-lato w-12 h-12 flex justify-center items-center'>
                    {remainingTime ? remainingTime.days : 0}
                  </span>
                  <span className='text-[12px] font-lato pt-1'>DAYS</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <span className='bg-primary rounded-full p-3 text-white font-bold font-lato w-12 h-12 flex justify-center items-center'>
                    {remainingTime ? remainingTime.hours : 0}
                  </span>
                  <span className='text-[12px] font-lato pt-1'>HOURS</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <span className='bg-primary rounded-full p-3 text-white font-bold font-lato w-12 h-12 flex justify-center items-center'>
                    {remainingTime ? remainingTime.minutes : 0}
                  </span>
                  <span className='text-[12px] font-lato pt-1'>MINS</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <span className='bg-primary rounded-full p-3 text-white font-bold font-lato w-12 h-12 flex justify-center items-center'>
                    {remainingTime ? remainingTime.seconds : 0}
                  </span>
                  <span className='text-[12px] font-lato pt-1'>SECS</span>
                </div>
              </div>
              <input
                type='datetime-local'
                value={targetDate ? targetDate.toISOString().slice(0, 16) : ''}
                onChange={handleDateTimeChange}
              />
            </div>

            <div className='QTY_section flex flex-wrap gap-2 w-full my-5'>
              <div className='QTY w-48 addToCart border border-gray border-opacity-50 px-3 py-1 flex justify-between items-center'>
                <span
                  onClick={handleDecrease}
                  className='text-2xl text-gray cursor-pointer'
                >
                  <i class='ri-subtract-line'></i>
                </span>
                <input
                  className='w-full text-center text-xl'
                  type='number'
                  name=''
                  id=''
                  value={qty}
                  onChange={handleChange}
                />
                <span
                  onClick={handleIncrease}
                  className='text-2xl text-gray cursor-pointer'
                >
                  <i class='ri-add-fill'></i>
                </span>
              </div>
              <Button className='bg-black rounded-[0px] hover:bg-primary text-sm font-lato w-48 addToCart'>
                ADD TO CART
              </Button>
            </div>
            <Button className='bg-primary rounded-[0px] hover:bg-black text-sm font-lato w-48 addToCart'>
              BUY NOW
            </Button>

            <div className='flex items-center my-3 cursor-pointer'>
              <span className='border w-10 h-10 flex justify-center items-center text-gray hover:text-white border-gray border-opacity-40 text-xl wishlist_icon hover:bg-primary'>
                <i class='ri-heart-line'></i>
              </span>
              <span className='pl-2 text-blue-gray-800 add_wishlist'>
                Add to withlist
              </span>
            </div>

            <hr className='text-gray opacity-30 my-5' />

            <div className='seller_info'>
              <p>SKU: D2018</p>
              <p>
                Category: <span>Fantasy</span>{' '}
              </p>
              <p>Tags: Hot, Men</p>
              <p>Author: Sabela Hupter</p>
            </div>

            <div className='social_icon flex items-center gap-2 my-2'>
              <span className='w-8 h-8 flex justify-center items-center bg-[#3B5998] text-white text-xl'>
                <i class='ri-facebook-fill'></i>
              </span>
              <span className='w-8 h-8 flex justify-center items-center bg-[#55ACEE] text-white text-xl'>
                <i class='ri-twitter-fill'></i>
              </span>
              <span className='w-8 h-8 flex justify-center items-center bg-[#007AB9] text-white text-xl'>
                <i class='ri-linkedin-box-fill'></i>
              </span>
            </div>
            {/* end single details  */}
          </div>
        </div>
        {/* review section  */}
        <div className='w-full'>
          <Tabs value={activeTab} orientation='vertical'>
            <TabsHeader
              className='rounded-none border-b border-gray border-opacity-40 bg-transparent p-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'
              indicatorProps={{
                className:
                  'bg-transparent border-b-2 border-gray border-opacity-40 shadow-none rounded-none',
              }}
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setActiveTab(value)}
                  className={
                    activeTab === value
                      ? 'text-black font-libre font-bold text-[12px]'
                      : 'text-gray font-libre font-bold text-[12px]'
                  }
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>

        {/* related products  */}
        <div className='my-10'>
          <h2 className='text-center font-libre font-bold text-2xl '>
            Related Products
          </h2>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SingleBooks
