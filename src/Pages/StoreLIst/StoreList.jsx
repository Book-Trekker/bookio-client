import React from 'react'
import BreadCumb from '../../Shared/BreadCumb/BreakCumb'
import { Select, Option } from '@material-tailwind/react'
import '../../style/Global.css'

const StoreList = () => {
  return (
    <section className='store_list_section'>
      <div className='store_list_main'>
        {/* breadcumb  */}
        <div className='breadCumb'>
          <BreadCumb
            first={'Home'}
            second={'Store-list'}
            route={'store-list'}
            MyAccount={'Store List'}
          />
        </div>
        {/* store-list filter  */}
        <div className='store_filter mt-5 p-10 shadow-inner mx-10 my-5'>
          <div className='st_filter_main flex items-center justify-between'>
            <h4 className='text-[#767a79] font-lato'>
              Total stores showing: 6
            </h4>
            <div className='filter_ flex items-center gap-2'>
              {/* filter icon  */}
              <div className='flt_icon px-5 py-1 bg-primary text-white'>
                <h4 className='flex items-center'>
                  <i class='ri-filter-3-line text-2xl mr-1'></i> FILTER
                </h4>
              </div>
              {/* sort by  */}
              <div className='sort_by flex items-center'>
                <span className='text-[#767a79] font-lato block'>Sort by:</span>
                <div className='custom_filter'>
                  <Select label='Select Filter'>
                    <Option>Most Recent</Option>
                    <Option>Most Popular</Option>
                    <Option>Random</Option>
                  </Select>
                </div>
                <div className='icon ml-2'>
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
      </div>
    </section>
  )
}

export default StoreList
