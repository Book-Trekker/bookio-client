import React from "react";
import Footer from "../../Shared/Footer/Footer";
import MobileMenu from "../MobileMenu/MobileMenu";
import BookAdventure from "./BookAdventure/BookAdventure";
import BookOfTheMonth from "./BookOfTheMonth/BookOfTheMonth";
import BottomHeader from "./BottomHeader/BottomHeader";
import Discount from "./Discount/Discount";
import MIddleHeder from "./Header/MIddleHeder";
import TopHeader from "./Header/TopHeader";
import Hero from "./Hero/Hero";
import HeroCard from "./HeroCard/HeroCard";
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
      <Trending />
      <TopCategories />
      <BookOfTheMonth />
      <BookAdventure />
      <Footer />
      <MobileMenu />
    </section>
  );
};

export default HomePage;
