import React from "react";
import { useGlobalContext } from "../../context/useGlobal";
import HotelList from "./HotelList";
import HotelSearch from "./HotelSearch";
import styles from "./Hotel.module.scss";

const Hotel = () => {
  const value = useGlobalContext();

  return (
    <main className={styles["hotel-main"]}>
      <div className={styles["hotel-wrap"]}>
        <section className={styles["hotel-search"]}>
          <HotelSearch />
        </section>
        <section className={styles["hotel-list"]}>
          <HotelList />
        </section>
      </div>
    </main>
  );
};

export default Hotel;
