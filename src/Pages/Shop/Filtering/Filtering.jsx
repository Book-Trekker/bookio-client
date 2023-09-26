import React, { useEffect, useState } from 'react'
import Rating from 'react-rating'
import { brands, category, Ratings, years } from '../../../utilities/Filtering'
import Brand from './Brand'
import Category from './category'
import FilterTitle from './FilterTitle'
import SRating from './SRating'
import Year from './Year'
import { Checkbox } from '@material-tailwind/react'

const Filtering = () => {
  const [activeCategory, setActiveCategory] = useState([])
  const [activeRatings, setActiveRatings] = useState([])
  console.log(activeCategory, activeRatings)

  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  // Update URL when minPrice or maxPrice changes
  useEffect(() => {
    const queryParams = new URLSearchParams()

    if (minPrice !== '') {
      queryParams.set('minPrice', minPrice)
    }

    if (maxPrice !== '') {
      queryParams.set('maxPrice', maxPrice)
    }

    if (activeCategory.length > 0) {
      // Join the category values with commas
      queryParams.set('category', activeCategory.join(','))
    }

    if (activeRatings.length > 0) {
      // Sort the ratings in ascending order
      const sortedRatings = activeRatings.sort((a, b) => a - b)
      // Set the highest selected rating in the URL
      queryParams.set('rating', sortedRatings[sortedRatings.length - 1])
    }

    const newUrl = queryParams.toString()
      ? `http://localhost:3000/shop?${queryParams.toString()}`
      : 'http://localhost:3000/shop'

    window.history.replaceState({}, '', newUrl)
  }, [minPrice, maxPrice, activeCategory, activeRatings])

  // Handle category selection
  const handleCategorySelect = (category) => {
    if (activeCategory.includes(category)) {
      // Category is already selected, remove it
      setActiveCategory((prevActiveCategory) =>
        prevActiveCategory.filter((c) => c !== category)
      )
    } else {
      // Category is not selected, add it
      setActiveCategory((prevActiveCategory) => [
        ...prevActiveCategory,
        category,
      ])
    }
  }

  return (
    <div className='mx-4'>
      <div>
        <div className='category border-2 border-[#e6e6e6] px-5 py-2 mb-5'>
          <FilterTitle>Categories</FilterTitle>
          {category.map((cate, index) => (
            <label key={index} className='block'>
              <input
                type='checkbox'
                value={cate}
                checked={activeCategory.includes(cate)}
                onChange={() => handleCategorySelect(cate)}
              />
              {cate}
            </label>
          ))}
        </div>

        <div className='price border-2 border-[#e6e6e6] px-5 py-2 mb-5'>
          <FilterTitle>
            <div>
              <h3>Price</h3>
              <div className='grid grid-cols-2 gap-x-3 w-full'>
                <p className='text-gray'>
                  Min{' '}
                  <span>
                    {' '}
                    <input
                      className='border w-full border-gray'
                      type='text'
                      name=''
                      id=''
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                    />{' '}
                  </span>
                </p>
                <p className='text-gray'>
                  Max{' '}
                  <span>
                    {' '}
                    <input
                      className='border w-full border-gray'
                      type='text'
                      name=''
                      id=''
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />{' '}
                  </span>
                </p>
              </div>
            </div>
          </FilterTitle>
        </div>
        <div className='years border-2 border-[#e6e6e6] px-5 py-2 mb-5'>
          <FilterTitle>Ratings</FilterTitle>
          {Ratings.map((rating, index) => (
            <SRating
              key={index + rating}
              {...{ rating, activeRatings, setActiveRatings }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Filtering
