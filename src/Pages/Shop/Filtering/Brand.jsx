import React, { useState } from "react";
import { Checkbox } from "@material-tailwind/react";

const Brand = ({ brand, activeBrands, setActiveBrands }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    if (activeBrands.includes(brand.toLocaleLowerCase())) {
      const notExitCategory = activeBrands.filter(
        (c) => c !== brand.toLocaleLowerCase()
      );
      setActiveBrands(notExitCategory);
    } else {
      setActiveBrands((prev) => [...prev, brand.toLocaleLowerCase()]);
    }
  };

  return (
    <div>
      <Checkbox
        className=""
        id={brand}
        onChange={handleChange}
        label={brand}
        checked={checked}
      />
    </div>
  );
};

export default Brand;
