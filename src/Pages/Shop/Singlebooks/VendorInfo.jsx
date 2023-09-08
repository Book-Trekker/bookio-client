import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetBookByIdQuery } from '../../../redux/features/books/bookApiSlice'

const VendorInfo = () => {
  const { id } = useParams()
  const { data: bookData, isLoading, isError, error } = useGetBookByIdQuery(id)
  //   console.log(bookData)
  return (
    <div>
      <h2 className='font-libre font-bold text-xl my-5'>
        SHOP OWNER INFORMATION
      </h2>
      <p className='py-2 font-normal text-gray text-sm'>
        Store Name: <span>Bookio</span>
      </p>
      <p className='py-2 font-normal text-gray text-sm'>
        Shop Owner:{' '}
        <span className='text-black font-normal text-opacity-95'>
          {bookData?.data?.seller?.name}
        </span>
      </p>
      <p className='py-2 font-normal text-gray text-sm'>
        Address: <span>{bookData?.data?.seller?.address}</span>
      </p>
      <p className='py-2 font-normal text-gray text-sm'>
        Eamil: <span>{bookData?.data?.seller?.email}</span>
      </p>
      <p className='py-2 font-normal text-gray text-sm'>
        Contact Info: <span>0{bookData?.data?.seller?.phoneNumber}</span>
      </p>
      <p className='py-2 font-normal text-gray text-sm'>
        Total Income:{' '}
        <span>
          ${' '}
          <span className='text-black font-normal text-opacity-95'>
            {bookData?.data?.seller?.income}
          </span>
        </span>
      </p>
    </div>
  )
}

export default VendorInfo
