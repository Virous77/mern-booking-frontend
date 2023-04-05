import React, { useState } from "react";
import styles from "./Hotel.module.scss";
import DateRangeApp from "../DateRange/DateRange";
import BookingUserData from "./BookingUserData";
import Button from "../common/Button";

export type peopleDataType = {
  adult: string;
  children: string;
  room: string;
};

const HotelSearch = () => {
  const [showDate, setShowDate] = useState(false);
  const [price, setPrice] = useState({ maxPrice: "1000", minPrice: "100" });
  const [peopleData, setPeopleData] = useState<peopleDataType>({
    adult: "1",
    children: "0",
    room: "1",
  });

  const body = document.querySelector("body");
  body?.addEventListener("click", () => {
    setShowDate(false);
  });

  return (
    <aside className={styles["hotel-aside"]}>
      <div className={styles["hotel-aside-wrap"]}>
        <h2>Search</h2>
        <div className={styles["hotel-aside-search"]}>
          <label>Destination</label>
          <input type="text" placeholder="Search Destination.." />
        </div>

        <div className={styles["hotel-aside-date"]}>
          <label>Check-in Date</label>
          <b
            onClick={(e) => {
              e.stopPropagation();
              setShowDate(!showDate);
            }}
          >
            05/05/2022 to 04/08/2022
          </b>
          {showDate && <DateRangeApp style={styles["hotel-aside-pick"]} />}
        </div>
        <BookingUserData
          price={price}
          setPrice={setPrice}
          peopleData={peopleData}
          setPeopleData={setPeopleData}
        />
        <Button
          className={styles["hotel-aside-button"]}
          buttonName="Search"
          onClick={() => console.log("clicked")}
        />
      </div>
    </aside>
  );
};

export default HotelSearch;
