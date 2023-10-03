import React from 'react'
import { Button, IconButton } from "@material-tailwind/react";

const TablePagination = () => {
    const [active, setActive] = React.useState(1);

     
  const getItemProps = (index) =>
  ({
    variant: active === index ? "filled" : "text",
    color: "red",
    onClick: () => setActive(index),
  });

const next = () => {
  if (active === 5) return;

  setActive(active + 1);
};

const prev = () => {
  if (active === 1) return;

  setActive(active - 1);
};
  return (
    <div className="flex items-center gap-4">
    <Button
      variant="text"
      className="flex items-center gap-2 text-[.8rem]"
      onClick={prev}
      disabled={active === 1}
    >
        <i className="ri-arrow-left-line text-[1rem] "></i>
        Previous
    </Button>
    <div className="flex items-center ">
      <IconButton className='text-[.8rem]' {...getItemProps(1)}>1</IconButton>
      <IconButton className='text-[.8rem]' {...getItemProps(2)}>2</IconButton>
      <IconButton className='text-[.8rem]' {...getItemProps(3)}>3</IconButton>
      <IconButton className='text-[.8rem]' {...getItemProps(4)}>4</IconButton>
      <IconButton className='text-[.8rem]' {...getItemProps(5)}>5</IconButton>
    </div>
    <Button
      variant="text"
      className="flex items-center gap-2 text-[.8rem]"
      onClick={next}
      disabled={active === 5}
    >
      Next
      <i className="ri-arrow-right-line text-[1rem]"></i>
      {/* <ArrowRightIcon strokeWidth={2} className="h-4 w-4" /> */}
    </Button>
  </div>
  )
}

export default TablePagination