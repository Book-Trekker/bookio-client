import React, { useState } from "react";
import Rating from "react-rating";
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

  return (
    <div className="mx-4">
      <div>
        <div className="category border-2 border-[#e6e6e6] px-5 py-2 mb-5">
          <FilterTitle>Categories</FilterTitle>
          {category.map((cate, index) => (
            <Category
              key={cate}
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
            <Brand key={brand} {...{ brand, activeBrands, setActiveBrands }} />
          ))}
        </div>
        <div className="years border-2 border-[#e6e6e6] px-5 py-2 mb-5">
          <FilterTitle>Years</FilterTitle>
          {years.map((year, index) => (
            <Year key={year} {...{ year, activeYears, setActiveYears }} />
          ))}
        </div>
        <div className="years border-2 border-[#e6e6e6] px-5 py-2 mb-5">
          <FilterTitle>Ratings</FilterTitle>
          {Ratings.map((rating, index) => (
            <SRating
              key={index + rating}
              {...{ rating, activeRatings, setActiveRatings }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filtering;
