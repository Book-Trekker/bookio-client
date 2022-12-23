import React from "react";
import Footer from "../../Shared/Footer/Footer";
import MobileMenu from "../MobileMenu/MobileMenu";
import BookAdventure from "./BookAdventure/BookAdventure";
import BookOfTheMonth from "./BookOfTheMonth/BookOfTheMonth";
import BottomHeader from "./BottomHeader/BottomHeader";
import Discount from "./Discount/Discount";
import FantasticChoice from "./FantasticChoice/FantasticChoice";
import MIddleHeder from "./Header/MIddleHeder";
import TopHeader from "./Header/TopHeader";
import Hero from "./Hero/Hero";
import HeroCard from "./HeroCard/HeroCard";
import PopularShop from "./PopularShop/PopularShop";
import Testimonial from "./Testimonial/Testimonial";
import TopCategories from "./TopCategories/TopCategories";
import Trending from "./Trending/Trending";

const HomePage = () => {
  return (
    <section className="homepage">
      <TopHeader />
      <MIddleHeder />
      <BottomHeader />
      <Hero />
      <HeroCard />
      <Discount />
      <PopularShop />
      <Trending title='Trending On Bookio' />
      <TopCategories />
      <BookOfTheMonth />
      <BookAdventure />
      <Trending title='Bookio Top Books' />
      <FantasticChoice />
      <Testimonial />
      <Footer />
      <MobileMenu />
    </section>
  );
};

export default HomePage;
