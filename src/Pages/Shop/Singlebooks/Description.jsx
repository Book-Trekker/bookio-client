import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetBookByIdQuery } from '../../../redux/features/books/bookApiSlice'

const Description = () => {
  const { id } = useParams()
  const { data: bookData, isLoading, isError, error } = useGetBookByIdQuery(id)
  return (
    <div className='pt-3 pb-8'>
      <p className='font-lato font-medium'>{bookData?.data?.description}</p>
    </div>
  )
}

export default Description
