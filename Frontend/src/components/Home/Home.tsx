import React from "react";
import Hero from "./Hero";
import styles from "./Home.module.scss";
import HotelByCity from "./HotelByCity";
import PropertyType from "./PropertyType";
import Featured from "./Featured";

const Home = () => {
  return (
    <main className={styles["home-main"]}>
      <Hero />
      <HotelByCity />
      <PropertyType />
      <Featured />
    </main>
  );
};

export default Home;
