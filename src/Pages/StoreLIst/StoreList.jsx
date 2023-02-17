import React from 'react'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'
import { Select, Option } from '@material-tailwind/react'
import { Input } from '@material-tailwind/react'
import '../../style/Global.css'
import { useState } from 'react'
import SortedListCard from './SortedListCard'
import bg1 from '../../assets/images/sorted-list/sorted1.png'
import bg2 from '../../assets/images/sorted-list/sorted2.png'
import bg3 from '../../assets/images/sorted-list/sorted3.png'
import bg4 from '../../assets/images/sorted-list/sorted4.png'
import bg5 from '../../assets/images/sorted-list/sorted5.png'
import bg6 from '../../assets/images/sorted-list/sorted6.png'
import profile1 from '../../assets/images/sorted-list/sorted1.1.png'
import profile2 from '../../assets/images/sorted-list/sorted2.2.png'
import profile3 from '../../assets/images/sorted-list/sorted3.3.png'
import profile4 from '../../assets/images/sorted-list/sorted4.4.png'
import profile5 from '../../assets/images/sorted-list/sorted5.5.png'
import profile6 from '../../assets/images/sorted-list/sorted6.6.png'

const StoreList = () => {
  const [openSearch, setOpenSearch] = useState(false)
  return (
    <section className='store_list_section'>
      <div className='store_list_main'>
        {/* breadcumb  */}
        <div className='breadCumb'>
          <BreadCumb
            first={'Home'}
            second={'Store List'}
            route={'store-list'}
            MyAccount={'Store List'}
          />
        </div>
        {/* store-list filter  */}
        <div className='store_filter mt-5 p-3 md:p-10 shadow-inner mx-5 md:mx-10 my-5'>
          <div className='st_filter_main flex flex-col md:flex-row md:items-center md:justify-between'>
            <h4 className='text-[#767a79] font-lato text-2xl py-2'>
              Total stores showing: 6
            </h4>
            <div className='filter_ flex flex-col md:flex-row items-center gap-2'>
              {/* filter icon  */}
              <div
                onClick={() => setOpenSearch(!openSearch)}
                className='w-full md:w-auto flt_icon px-5 py-1 bg-primary text-white cursor-pointer'
              >
                <h4 className='flex items-center'>
                  <i class='ri-filter-3-line text-2xl mr-1'></i> FILTER
                </h4>
              </div>
              {/* sort by  */}
              <div className='sort_by flex items-center w-full md:w-auto'>
                <span className='text-[#767a79] font-lato block pr-1'>
                  Sort by:{' '}
                </span>
                <div className='custom_filter'>
                  <Select label='Select Filter'>
                    <Option>Most Recent</Option>
                    <Option>Most Popular</Option>
                    <Option>Random</Option>
                  </Select>
                </div>
                <div className='icon ml-2 hidden md:block'>
                  <span>
                    <i class='ri-layout-grid-fill text-2xl ml-1 cursor-pointer'></i>
                  </span>
                  <span>
                    <i class='ri-menu-line text-2xl ml-1 cursor-pointer'></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sorted_menu  */}
        <div
          className={
            openSearch
              ? 'sorted_menu mx-10 h-full opacity-1 transition-all duration-100 ease-in'
              : 'sorted_menu mx-10 h-0 opacity-0 transition-all duration-100 ease-in'
          }
        >
          <div className='sorted_search p-10 shadow-inner'>
            <div className='w-full'>
              <Input label='Search Vendors' />
              <div className='text-right'>
                <button className='px-8 py-2 bg-primary text-white mt-3'>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* sorted list card  */}
        <div className='sorted_list_card mx-5 md:mx-10 my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          <SortedListCard title={'Bookshop'} bg={bg1} profile={profile1} />
          <SortedListCard title={'Bookshop'} bg={bg2} profile={profile2} />
          <SortedListCard title={'Bookshop'} bg={bg3} profile={profile3} />
          <SortedListCard title={'Bookshop'} bg={bg4} profile={profile4} />
          <SortedListCard title={'Bookshop'} bg={bg5} profile={profile5} />
          <SortedListCard title={'Bookshop'} bg={bg6} profile={profile6} />
        </div>
      </div>
    </section>
  )
}

export default StoreList
