import React from "react";
import Footer from "../../Shared/Footer/Footer";
import MobileMenu from "../MobileMenu/MobileMenu";
import BottomHeader from "./BottomHeader/BottomHeader";
import Discount from "./Discount/Discount";
import MIddleHeder from "./Header/MIddleHeder";
import TopHeader from "./Header/TopHeader";
import Hero from "./Hero/Hero";
import HeroCard from "./HeroCard/HeroCard";
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
      <Footer />
      <MobileMenu />
    </section>
  );
};

export default HomePage;
