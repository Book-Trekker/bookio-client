import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useCreateBookMutation } from "../../../redux/features/books/bookApiSlice";
import { uploadCloudinary } from "../../../utilities/imagesUpload/upload";

const SimpleForm = () => {
  const { handleSubmit, control } = useForm();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [link, setLink] = useState([]);
  const [createBook] = useCreateBookMutation();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      let arr = [];
      for (let i = 0; i < images.length; i++) {
        const imageData = await uploadCloudinary(images[i]);
        arr.push(imageData);
      }
      setLink([...arr]);
      const allData = { ...data, images: [...arr] };
      setLoading(false);
      // console.log("arr image", arr)
      console.log("Form Data:", allData);
    } catch (error) {
      console.error("error", error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      {loading && <div className="text-4xl">loading.....</div>}
      <div className="flex flex-wrap -mx-2">
        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Name:
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="border rounded-md px-2 py-1 w-full mt-1"
                />
              )}
            />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Author:
            <Controller
              name="author"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="border rounded-md px-2 py-1 w-full mt-1"
                />
              )}
            />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Image
            <input
              required
              type="file"
              multiple={true}
              onChange={(e) => setImages(e.target.files)}
            />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Price:
            <Controller
              name="price"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="border rounded-md px-2 py-1 w-full mt-1"
                />
              )}
            />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Quantity:
            <Controller
              name="quantity"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="border rounded-md px-2 py-1 w-full mt-1"
                />
              )}
            />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Category:
            <Controller
              name="category"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select
                  {...field}
                  className="border rounded-md px-2 py-1 w-full mt-1"
                >
                  <option value="">Select Category</option>
                  <option value="science">Science</option>
                  <option value="adventure">Adventure</option>
                  <option value="romance">Romance</option>
                </select>
              )}
            />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Seller:
            <Controller
              name="seller"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="border rounded-md px-2 py-1 w-full mt-1"
                />
              )}
            />
          </label>
        </div>

        <div className="w-full px-2 mb-4">
          <label className="block mb-2">
            Status:
            <Controller
              name="status"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  className="border rounded-md px-2 py-1 w-full mt-1"
                />
              )}
            />
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
