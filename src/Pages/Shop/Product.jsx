import React from 'react'
import { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsMinecartLoaded } from 'react-icons/bs'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProfileQuery } from '../../redux/features/users/userApiSlice'
import { useAddToCartMutation } from '../../redux/features/cart/cartApiSlice'
import { toast } from 'react-toastify'

const Product = ({ bookData }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { name, author, image, price, quantity, status, category, _id } =
    bookData

  const {
    data: profile,
    isLoading: profileIsLoading,
    error: profileError,
  } = useGetProfileQuery()
  const [addToCartMutation] = useAddToCartMutation()
  const bookId = bookData?._id
  const userId = profile?.data?._id

  // console.log(image[1])

  const navigate = useNavigate()

  const navigateToBookDetail = () => {
    // Use the history object to navigate
    navigate(`/shop/book/${_id}`)
  }

  const handleAddToCart = () => {
    const cartItem = {
      userId,
      bookId,
    }

    addToCartMutation(cartItem)
      .unwrap()
      .then((response) => {
        // Handle the successful response
        console.log('Book added to cart successfully!', response)
        toast.success('Book added to cart successfully!', {
          position: 'top-right',
          autoClose: 3000,
        })
      })
      .catch((error) => {
        // Handle errors
        console.error('Error adding book to cart:', error)
      })
  }

  return (
    <div className='w-full change-bg-1 mb-6'>
      {/* cart  */}
      <div
        style={{
          backgroundImage: `url(${isHovered ? image[0] : image[1]})`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className='trending-1 trend-bg-1 w-full relative'
      >
        <div className='trending_content flex justify-between p-2'>
          <p className='text-sm'>
            <span className='px-2 bg-yellow text-white py-[1px]'>Hot</span>
          </p>
          <p className=' bg-white text-black rounded-full'>
            <span>
              <i class='far fa-heart p-2 cursor-pointer hover:bg-primary hover:text-white bg-white text-black rounded-full'></i>
            </span>
          </p>
        </div>
        <div className='trending-cart-1 w-full absolute bottom-0'>
          <div className='action flex justify-between items-center w-full'>
            <button
              onClick={handleAddToCart}
              className='py-3 bg-black text-white w-full custom-border relative hover:bg-primary flex justify-center items-center'
            >
              <span>
                <BsMinecartLoaded className='text-2xl' />
              </span>
            </button>
            <button
              onClick={navigateToBookDetail}
              className='py-3 bg-black text-white w-full hover:bg-primary  flex justify-center items-center'
            >
              <span>
                <AiOutlineEye className='text-2xl' />
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* cart details  */}
      <div className='details'>
        <p className='author text-sm text-gray mt-2 font-bold'>
          By: <span className='font-normal'>{author}</span>
        </p>
        <p className='book-name text-lg font-libre font-medium text-primary'>
          {name}
        </p>
        <p className='price text-sm font-libre font-bold text-secondary'>
          ${price}
        </p>
      </div>
    </div>
  )
}

export default Product
