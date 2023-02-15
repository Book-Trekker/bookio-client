import React, { useState } from "react";
import { Checkbox } from "@material-tailwind/react";

const Category = ({ cate, activeCategory, setActiveCategory }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    if (activeCategory.includes(cate.toLocaleLowerCase())) {
      const notExitCategory = activeCategory.filter(
        (c) => c !== cate.toLocaleLowerCase()
      );
      setActiveCategory(notExitCategory);
    } else {
      setActiveCategory((prev) => [...prev, cate.toLocaleLowerCase()]);
    }
  };

  return (
    <div>
      <Checkbox
        className=""
        id={cate}
        onChange={handleChange}
        label={cate}
        checked={checked}
      />
    </div>
  );
};

export default Category;
