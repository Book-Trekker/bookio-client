import React, { useState } from "react";
import { Checkbox } from "@material-tailwind/react";

const Year = ({ year, activeYears, setActiveYears }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    if (activeYears.includes(year.toLocaleLowerCase())) {
      const notExitCategory = activeYears.filter(
        (c) => c !== year.toLocaleLowerCase()
      );
      setActiveYears(notExitCategory);
    } else {
      setActiveYears((prev) => [...prev, year.toLocaleLowerCase()]);
    }
  };

  return (
    <div>
      <Checkbox
        className=""
        id={year}
        onChange={handleChange}
        label={year}
        checked={checked}
      />
    </div>
  );
};

export default Year;
