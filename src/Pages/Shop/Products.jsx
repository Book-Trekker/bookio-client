import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsMinecartLoaded } from 'react-icons/bs'
import { shopProductData } from '../../utilities/shopData'
import BestSeller from './BestSeller'
import Filtering from './Filtering/Filtering'
import MobileFiltering from './Filtering/MobileFiltering'
import Product from './Product'
import ProductHeader from './ProductHeader'
import { useGetAllBooksQuery } from '../../redux/features/books/bookApiSlice'

const Products = () => {
  const [showMobileFiltering, setShowMobileFiltering] = useState(false)

  const { data: books, isLoading, isError } = useGetAllBooksQuery()

  console.log(books?.data)

  return (
    <div>
      <div className='grid grid-cols-12 px-5 md:px-10'>
        <div className='lg:col-span-3 lg:block hidden'>
          <Filtering />
        </div>
        <div className=' col-span-12 lg:col-span-9'>
          {/* Best seller items  */}
          <BestSeller title={'Best Seller Items'} />
          <BestSeller title={'Featured Items'} />
          {/* Best seller items end  */}

          <ProductHeader {...{ showMobileFiltering, setShowMobileFiltering }} />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10'>
            {books?.data.map((p) => (
              <Product bookData={p} />
            ))}
          </div>
        </div>
      </div>
      <div className='relative'>
        <MobileFiltering {...{ showMobileFiltering, setShowMobileFiltering }} />
      </div>
    </div>
  )
}

export default Products
