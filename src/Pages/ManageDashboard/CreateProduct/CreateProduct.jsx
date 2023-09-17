import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useCreateBookMutation } from '../../../redux/features/books/bookApiSlice'
import { uploadCloudinary } from '../../../utilities/imagesUpload/upload'
import { useDropzone } from 'react-dropzone'
import { useGetProfileQuery } from '../../../redux/features/users/userApiSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const SimpleForm = () => {
  const {
    data: profile,
    isLoading: profileIsLoading,
    error: profileError,
  } = useGetProfileQuery()

  // console.log(profile?.data?._id)
const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm()
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState([])
  const [link, setLink] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])
  const [createBook] = useCreateBookMutation()

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      let arr = []
      for (let i = 0; i < images.length; i++) {
        const imageData = await uploadCloudinary(images[i])
        arr.push(imageData)
      }
      setLink([...arr])
      const allData = { ...data, images: [...arr] }
      setLoading(false)

      // console.log('Form Data:', allData)
      const response = await createBook(allData).unwrap();
      console.log('Book Created:', response);
      setLoading(false);
      toast.success('Book created successfully!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      navigate('/shop')
      reset()
    } catch (error) {
      console.error('error', error)
      setLoading(false)
    }
  }

  const onDrop = (acceptedFiles) => {
    setImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    )
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  })

  return (
    <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='border border-gray border-opacity-20 p-4'>
          <h3 className='font-lato font-medium text-xl mb-4'>Add Images</h3>
          <div
            style={{ border: '3px dashed #AED2FF' }}
            className='w-full bg-[#F5F6FA] my-3 flex items-center flex-col p-4'
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <span>
              <i className='ri-drag-drop-line text-6xl text-gray'></i>
            </span>
            <span className='flex gap-x-2 mt-2'>
              <span>
                <i className='ri-upload-cloud-2-line text-2xl text-blue-500 font-bold'></i>
              </span>{' '}
              Drop your files here or{' '}
              <span className='text-blue-500 font-bold'>Browse</span>
            </span>
          </div>
          {errors.images && (
            <p className='text-red-500 mt-2'>
              {errors.images.message || 'Please select at least one image.'}
            </p>
          )}
          <div>
            <h3 className='font-lato font-medium text-xl mb-4'>
              Preview Images
            </h3>
            <div className='flex flex-wrap -mx-2'>
              {images.map((preview, index) => (
                <div
                  key={index}
                  className='w-1/2 flex justify-center items-center px-2 mb-4'
                >
                  <img
                    src={preview.preview}
                    alt={`Preview ${index}`}
                    className='w-full h-36 mt-2'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='border border-gray border-opacity-20 p-4'>
          <input
            type='hidden'
            {...register('seller', { value: profile?.data?._id })}
          />
          <div className='flex flex-wrap -mx-2'>
            <div className='w-full px-2 mb-4'>
              <label className='block mb-2'>
                Name:
                <Controller
                  name='name'
                  control={control}
                  defaultValue=''
                  rules={{ required: 'Name is required' }}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        className={`border rounded-md px-2 py-1 w-full mt-1 ${
                          errors.name ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.name && (
                        <p className='text-red-500 mt-1'>
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </label>
            </div>

            <div className='w-full px-2 mb-4'>
              <label className='block mb-2'>
                Author:
                <Controller
                  name='author'
                  control={control}
                  defaultValue=''
                  rules={{ required: 'Author is required' }}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        className={`border rounded-md px-2 py-1 w-full mt-1 ${
                          errors.author ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.author && (
                        <p className='text-red-500 mt-1'>
                          {errors.author.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </label>
            </div>

            <div className='w-full px-2 mb-4'>
              <label className='block mb-2'>
                Price:
                <Controller
                  name='price'
                  control={control}
                  defaultValue=''
                  rules={{
                    required: 'Price is required',
                    pattern: {
                      value: /^\d+(\.\d{1,2})?$/, // Accepts numbers with up to 2 decimal places
                      message: 'Invalid price format',
                    },
                  }}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        type='number'
                        step='0.01'
                        className={`border rounded-md px-2 py-1 w-full mt-1 ${
                          errors.price ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.price && (
                        <p className='text-red-500 mt-1'>
                          {errors.price.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </label>
            </div>

            <div className='w-full px-2 mb-4'>
              <label className='block mb-2'>
                Quantity:
                <Controller
                  name='quantity'
                  control={control}
                  defaultValue=''
                  rules={{
                    required: 'Quantity is required',
                    pattern: {
                      value: /^[1-9]\d*$/, // Accepts positive integers only
                      message: 'Invalid quantity format',
                    },
                  }}
                  render={({ field }) => (
                    <div>
                      <input
                        {...field}
                        type='number'
                        className={`border rounded-md px-2 py-1 w-full mt-1 ${
                          errors.quantity ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.quantity && (
                        <p className='text-red-500 mt-1'>
                          {errors.quantity.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </label>
            </div>

            <div className='w-full px-2 mb-4'>
              <label className='block mb-2'>
                Category:
                <Controller
                  name='category'
                  control={control}
                  defaultValue=''
                  rules={{ required: 'Category is required' }}
                  render={({ field }) => (
                    <div>
                      <select
                        {...field}
                        className={`border rounded-md px-2 py-1 w-full mt-1 ${
                          errors.category ? 'border-red-500' : ''
                        }`}
                      >
                        <option value=''>Select Category</option>
                        <option value='science'>Science</option>
                        <option value='adventure'>Adventure</option>
                        <option value='romance'>Romance</option>
                      </select>
                      {errors.category && (
                        <p className='text-red-500 mt-1'>
                          {errors.category.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </label>
            </div>

            <div className='w-full px-2 mb-4'>
              <label className='block mb-2'>
                Description:
                <Controller
                  name='description'
                  control={control}
                  defaultValue=''
                  rules={{ required: 'Description is required' }}
                  render={({ field }) => (
                    <div>
                      <textarea
                        {...field}
                        className={`border rounded-md px-2 py-1 w-full mt-1 ${
                          errors.description ? 'border-red-500' : ''
                        }`}
                        rows='4'
                      />
                      {errors.description && (
                        <p className='text-red-500 mt-1'>
                          {errors.description.message}
                        </p>
                      )}
                    </div>
                  )}
                />
              </label>
            </div>

            <div className='w-full px-2 mb-4'>
              <button
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-blue-600'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SimpleForm
