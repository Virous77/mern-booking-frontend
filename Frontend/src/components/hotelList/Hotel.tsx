import React, { useState, useRef } from "react";
import { useGlobalContext } from "../../context/useGlobal";
import HotelList from "./HotelList";
import HotelSearch from "./HotelSearch";
import styles from "./Hotel.module.scss";
import { useQuery } from "react-query";
import { fetchData } from "../../api/api";
import { HotelType } from "../../types/type";
import Search from "../search/Search";

export type peopleDataType = {
  adult: number;
  children: number;
  room: number;
};

const Hotel = () => {
  const [price, setPrice] = useState({ maxPrice: "1000", minPrice: "100" });
  const [peopleData, setPeopleData] = useState<peopleDataType>({
    adult: 1,
    children: 0,
    room: 1,
  });
  const value = useGlobalContext();

  const { data, isLoading, error } = useQuery(
    ["get-hotel"],
    async (): Promise<HotelType[]> =>
      fetchData(
        `/hotel?city=${value?.search || "Mumbai"}&min=${price.minPrice}&max=${
          price.maxPrice
        }`
      ),
    {
      enabled: value?.fetch,
    }
  );

  const handleSearch = () => {
    value?.setFetch(true);
    setTimeout(() => {
      value?.setFetch(false);
    }, 1000);
  };

  return (
    <main className={styles["hotel-main"]}>
      <div className={styles["hotel-wrap"]}>
        <section className={styles["hotel-search"]}>
          <HotelSearch
            peopleData={peopleData}
            price={price}
            setPeopleData={setPeopleData}
            handleSearch={handleSearch}
            setPrice={setPrice}
          />
        </section>
        <section className={styles["hotel-list"]}>
          <div className={styles["show-mobile"]}>
            <Search classname={styles["mobile-search"]} name="mobile" />
          </div>

          <HotelList hotels={data} />
        </section>
      </div>
    </main>
  );
};

export default Hotel;
