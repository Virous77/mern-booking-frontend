import React from "react";
import cityOne from "../../assets/city-one.jpeg";
import cityTwo from "../../assets/city-two.jpeg";
import cityThree from "../../assets/city-three.jpeg";
import styles from "./HotelByCity.module.scss";
import { useQuery } from "react-query";
import { getCountByCityHotel } from "../../api/api";

const HotelByCity = () => {
  const { data } = useQuery(["count"], (): number[] => getCountByCityHotel());

  return (
    <main className={styles["city-main"]}>
      <div className={styles["city-wrap"]}>
        <div className={styles["city-sub"]}>
          <img src={cityOne} alt="Mumbai" />

          <div className={styles["Sub-details"]}>
            <h1>Mumbai</h1>
            <p>{data?.[0]} Properties</p>
          </div>
        </div>

        <div className={styles["city-sub"]}>
          <img src={cityTwo} alt="Kolkata" />

          <div className={styles["Sub-details"]}>
            <h1>Kolkata</h1>
            <p>{data?.[2]} Properties</p>
          </div>
        </div>

        <div className={styles["city-sub"]}>
          <img src={cityThree} alt="Delhi" />
          <div className={styles["Sub-details"]}>
            <h1>Delhi</h1>
            <p>{data?.[1]} Properties</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HotelByCity;
