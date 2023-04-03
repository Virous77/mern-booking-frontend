import React, { useState } from "react";
import styles from "./MainComponent.module.scss";
import Search from "./Search";
import DateRangeApp from "../DateRange/DateRange";
import SearchButton from "./SearchButton";
import Today from "./Today";

const MainComponents = () => {
  const [showCalander, setShowCalander] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [serach, setSearch] = useState("");

  const handleDates = (item: any) => {
    setDates([item.selection]);
  };

  const body = document.querySelector("body");

  body?.addEventListener("click", () => {
    setShowCalander(false);
  });

  return (
    <div className={styles["search-main"]} onClick={(e) => e.stopPropagation()}>
      <Search search={serach} setSearch={setSearch} />
      {showCalander && <DateRangeApp dates={dates} handleDates={handleDates} />}
      <Today handleCalander={() => setShowCalander(true)} />
      <SearchButton />
    </div>
  );
};

export default MainComponents;
