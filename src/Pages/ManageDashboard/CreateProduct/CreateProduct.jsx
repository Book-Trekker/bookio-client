// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { Button, Input, Option, Select } from '@material-tailwind/react'
// import { useCreateBookMutation } from '../../../redux/features/books/bookApiSlice'

// const CreateBook = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const [createBook, { isLoading }] = useCreateBookMutation()

//   const onSubmit = async (bookData) => {
//     // try {
//     //   const response = await createBook(bookData).unwrap()
//     //   console.log(response)
//     // } catch (error) {
//     //   console.error(error)
//     // }
//     console.log("Get the data")
//   }

//   return (
//     <section className='px-5 py-8'>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className='flex gap-x-8 mb-8'>
//           <Input
//             variant='static'
//             label='Book Name *'
//             {...register('bookName', { required: true })}
//           />
//           <Input
//             variant='static'
//             label='Author Name *'
//             {...register('authorName', { required: true })}
//           />
//           <Input
//             type='number'
//             variant='static'
//             label='Book Price *'
//             {...register('bookPrice', { required: true, min: 0 })}
//           />
//         </div>
//         <div className='flex gap-x-8 mb-8'>
//           <Input
//             variant='static'
//             label='Image URL *'
//             {...register('imageUrl', { required: true })}
//           />
//           <Select
//             variant='static'
//             label='Book Category *'
//             {...register('bookCategory', { required: true })}
//           >
//             <Option>Science</Option>
//             <Option>Adventure</Option>
//             <Option>Romance</Option>
//           </Select>
//         </div>
//         <div className='flex gap-x-8 mb-8'>
//           <Input
//             variant='static'
//             label='Book Quantity *'
//             {...register('bookQuantity', { required: true, min: 0 })}
//           />
//           <Select
//             variant='static'
//             label='Book Availability *'
//             {...register('bookAvailability', { required: true })}
//           >
//             <Option>In Stock</Option>
//             <Option>Out Of Stock</Option>
//           </Select>
//           <Input variant='static' label='Seller Id' {...register('sellerId')} />
//         </div>
//         <Button
//           className='bg-primary hover:bg-secondary'
//           fullWidth
//           type='submit'
//           disabled={isLoading} // Disable the button while the mutation is in progress
//         >
//           {isLoading ? 'Adding Book...' : 'Add Book'}
//         </Button>
//       </form>
//     </section>
//   )
// }

// export default CreateBook

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateBookMutation } from "../../../redux/features/books/bookApiSlice";
import { uploadCloudinary } from "../../../utilities/imagesUpload/upload";

const SimpleForm = () => {
  const [images, setImages] = useState([]);
  const [link, setLink] = useState([]);
  const [createBook] = useCreateBookMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i]);
        arr.push(data);
      }
      setLink([...arr]);
    } catch (error) {
      console("error", error);
    }
  };
  
  console.log("link", link);
  // const onSubmit = (data) => {
  //   console.log(data)
  // }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Name:
            <input className="border rounded-md px-2 py-1 w-full mt-1" />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Author:
            <input className="border rounded-md px-2 py-1 w-full mt-1" />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Image
            <input
              type="file"
              multiple={true}
              onChange={(e) => setImages(e.target.files)}
            />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Price:
            <input className="border rounded-md px-2 py-1 w-full mt-1" />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Quantity:
            <input className="border rounded-md px-2 py-1 w-full mt-1" />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Category:
            <select className="border rounded-md px-2 py-1 w-full mt-1">
              <option value="">Select Category</option>
              <option value="science">Science</option>
              <option value="adventure">Adventure</option>
              <option value="romance">Romance</option>
            </select>
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Seller:
            <input className="border rounded-md px-2 py-1 w-full mt-1" />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Status:
            <input className="border rounded-md px-2 py-1 w-full mt-1" />
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;
