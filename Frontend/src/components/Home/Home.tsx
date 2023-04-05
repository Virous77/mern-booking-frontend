import React, { useState } from "react";
import Hero from "./Hero";
import styles from "./Home.module.scss";
import HotelByCity from "./HotelByCity";
import PropertyType from "./PropertyType";
import Featured from "./Featured";

const Home = () => {
  const [cool, setCool] = useState("man");
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
