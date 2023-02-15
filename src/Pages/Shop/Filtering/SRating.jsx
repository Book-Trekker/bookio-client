import React, { useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import ReactStars from "react-rating-stars-component";

const SRating = ({ rating, activeRatings, setActiveRatings }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    if (activeRatings.includes(rating)) {
      const notExitCategory = activeRatings.filter((c) => c !== rating);
      setActiveRatings(notExitCategory);
    } else {
      setActiveRatings((prev) => [...prev, rating]);
    }
  };
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const option = {
    edit: false,
    color: "#E1E1E1",
    activeColor: "#FFAE2B",
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
    value: parseInt(rating),
  };

  return (
    <div>
      <Checkbox
        className=""
        id={rating}
        onChange={handleChange}
        label={<ReactStars {...option} onChange={ratingChanged} />}
        checked={checked}
      />
    </div>
  );
};

export default SRating;
