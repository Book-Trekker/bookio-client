import React from "react";
import TopFooter from "../../Shared/Footer/TopFooter";
import MobileMenu from "../MobileMenu/MobileMenu";
import BookAdventure from "./BookAdventure/BookAdventure";
import BookOfTheMonth from "./BookOfTheMonth/BookOfTheMonth";
import Discount from "./Discount/Discount";
import FantasticChoice from "./FantasticChoice/FantasticChoice";
import Hero from "./Hero/Hero";
import HeroCard from "./HeroCard/HeroCard";
import PopularShop from "./PopularShop/PopularShop";
import PopularShopTwo from "./PopularShopTwo/PopularShopTwo";
import Testimonial from "./Testimonial/Testimonial";
import TopCategories from "./TopCategories/TopCategories";
import Trending from "./Trending/Trending";

const HomePage = () => {
  return (
    <section className="homepage">
      <Hero />
      <HeroCard />
      <Discount />
      <PopularShop />
      <PopularShopTwo />
      <Trending title="Trending On Bookio" />
      <TopCategories />
      <BookOfTheMonth />
      <BookAdventure />
      <Trending title="Bookio Top Books" />
      <FantasticChoice />
      <Testimonial />
      <TopFooter />
      {/* <Footer /> */}
      <MobileMenu />
    </section>
  );
};

export default HomePage;
