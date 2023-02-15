import React, { useState } from "react";
import Rating from "react-rating";
import ReactStars from "react-rating-stars-component";
import { brands, category, Ratings, years } from "../../../utilities/Filtering";
import Brand from "./Brand";
import Category from "./category";
import FilterTitle from "./FilterTitle";
import SRating from "./SRating";
import Year from "./Year";

const Filtering = () => {
  const [activeCategory, setActiveCategory] = useState([]);
  const [activeBrands, setActiveBrands] = useState([]);
  const [activeYears, setActiveYears] = useState([]);
  const [activeRatings, setActiveRatings] = useState([]);

  console.log("activeCategory", activeCategory);
  return (
    <div className="mx-4">
      <div>
        <div className="category border-2 border-[#e6e6e6] px-5 py-2 mb-5">
          <FilterTitle>Categories</FilterTitle>
          {category.map((cate, index) => (
            <Category
              key={index}
              {...{ cate, activeCategory, setActiveCategory }}
            />
          ))}
        </div>

        <div className="price border-2 border-[#e6e6e6] px-5 py-2 mb-5">
          <FilterTitle>Price</FilterTitle>
        </div>
        <div className="brand border-2 border-[#e6e6e6] px-5 py-2 mb-5">
          <FilterTitle>Brands</FilterTitle>
          {brands.map((brand, index) => (
            <Brand key={index} {...{ brand, activeBrands, setActiveBrands }} />
          ))}
        </div>
        <div className="years border-2 border-[#e6e6e6] px-5 py-2 mb-5">
          <FilterTitle>Years</FilterTitle>
          {years.map((year, index) => (
            <Year key={index} {...{ year, activeYears, setActiveYears }} />
          ))}
        </div>
        <div className="years border-2 border-[#e6e6e6] px-5 py-2 mb-5">
          <FilterTitle>Ratings</FilterTitle>
          {Ratings.map((rating, index) => (
            <SRating
              key={index}
              {...{ rating, activeRatings, setActiveRatings }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filtering;
