import React from "react";
import Header from "../Components/Layout/Header";
import Hero from "../Components/Route/Hero";
import Categories from "../Components/Route/Categories";
import BestDeals from "../Components/Route/BestDeals/BestDeals.jsx";
import FeaturedProducts from "../Components/Route/FeaturedProducts/FeaturedProducts.jsx";
import Events from "../Components/Events.jsx";
import Sponsored from "../Components/Route/Sponsored.jsx";
import Footer from "../Components/Layout/Footer.jsx";
const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProducts />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;
