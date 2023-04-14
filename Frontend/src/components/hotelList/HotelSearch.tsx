import React, { useState } from "react";
import styles from "./Hotel.module.scss";
import DateRangeApp from "../DateRange/DateRange";
import BookingUserData from "./BookingUserData";
import Button from "../common/Button";
import { useGlobalContext } from "../../context/useGlobal";
import { formatDate } from "../../utils/Data";
import { peopleDataType } from "./Hotel";

type HotelSearchProps = {
  price: {
    maxPrice: string;
    minPrice: string;
  };
  peopleData: peopleDataType;
  setPeopleData: React.Dispatch<React.SetStateAction<peopleDataType>>;
  handleSearch: () => void;
  setPrice: React.Dispatch<
    React.SetStateAction<{
      maxPrice: string;
      minPrice: string;
    }>
  >;
};

const HotelSearch: React.FC<HotelSearchProps> = ({
  price,
  peopleData,
  setPrice,
  setPeopleData,
  handleSearch,
}) => {
  const [showDate, setShowDate] = useState(false);
  const value = useGlobalContext();

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
          <input
            type="text"
            placeholder="Search Destination.."
            value={value?.search}
            onChange={(e) => value?.setSearch(e.target.value)}
          />
        </div>

        <div className={styles["hotel-aside-date"]}>
          <label>Check-in Date</label>
          <b
            onClick={(e) => {
              e.stopPropagation();
              setShowDate(!showDate);
            }}
          >
            {formatDate(new Date(value?.dates[0].startDate))}---
            {formatDate(new Date(value?.dates[0].endDate))}
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
          onClick={handleSearch}
        />
      </div>
    </aside>
  );
};

export default HotelSearch;
