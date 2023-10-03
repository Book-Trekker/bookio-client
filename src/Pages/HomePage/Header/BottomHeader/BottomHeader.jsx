import { useEffect, useRef, useState } from 'react'
import '../../../../style/Global.css'
import { useSearchBooksQuery } from '../../../../redux/features/books/bookApiSlice'

const Header = ({ sideDrawer, setSideDrawer }) => {
  const [searchValue, setSearchValue] = useState('')
  const { data: books } = useSearchBooksQuery(searchValue)
  // console.log(books?.data)
  // console.log(searchValue?.length)
  const [profile, setProfile] = useState(false)
  const [navSticky, setNavSticky] = useState(false)
  const handleProfile = () => {
    setProfile((prev) => !prev)
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setProfile(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY >= 65) {
        setNavSticky(true)
      } else {
        setNavSticky(false)
      }
    })
  }, [])

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return (
    <>
      <div className='mb-5 w-[60%] mx-auto'>
        <div className='search m-2 bg-grayDark'>
          <div className='sm:flex rounded shadow-sm flex justify-center items-center text-gray'>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type='text'
              placeholder='Search product...'
              className='py-3 bg-grayDark px-4 pr-11 block w-full shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative dark:text-gray-400 focus:outline-none'
            />
            <span className=' hover:bg-primary h-[50px] w-[60px] flex justify-center items-center'>
              <i class='ri-search-line text-secondary text-2xl'></i>
            </span>
          </div>
        </div>
        {/* search books  */}
        {searchValue?.length !== 0 && (
          <div className='p-2 w-full h-full'>
            <div
              style={{ maxHeight: '300px' }}
              className='w-full overflow-x-scroll hide-scrollbar'
            >
              {books?.data?.length > 0 ? (
                books?.data?.map((bookData, index) => (
                  <div className='w-full h-20 flex justify-between bg-gray bg-opacity-10 mb-2'>
                    <div className='w-full h-20 flex'>
                      <img
                        className='w-16 h-full p-2'
                        src={bookData?.images[0]?.url}
                        alt=''
                      />
                      <div className='w-full pl-2 h-full flex flex-col justify-center'>
                        <h3>{bookData?.name}</h3>
                        <p>${bookData?.price}</p>
                      </div>
                    </div>
                    <div className='p-4 w-44 h-full flex justify-center items-center'>
                      <span>See Details</span>
                      <span className='flex justify-center items-center'>
                        <i class='ri-arrow-right-s-line text-xl pl-1'></i>
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className='w-full h-20 flex justify-center items-center bg-gray bg-opacity-10'>
                  <span className='px-2 bg-gray bg-opacity-30 rounded flex justify-center items-center text-primary'>
                    Book Not Found{' '}
                    <i class='ri-error-warning-line text-xl pl-2 font-bold'></i>
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Header
