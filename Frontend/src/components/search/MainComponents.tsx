import React from "react";
import styles from "./MainComponent.module.scss";
import Search from "./Search";
import DateRangeApp from "../DateRange/DateRange";
import SearchButton from "./SearchButton";
import Today from "./Today";
import { useGlobalContext } from "../../context/useGlobal";

const MainComponents = React.memo(() => {
  const value = useGlobalContext();

  const body = document.querySelector("body");
  body?.addEventListener("click", () => {
    value?.setShowCalander(false);
  });

  return (
    <div className={styles["search-main"]} onClick={(e) => e.stopPropagation()}>
      <Search />
      {value?.showCalander && (
        <div className={styles["hide-it"]}>
          <DateRangeApp style={styles["date-main"]} />
        </div>
      )}
      <Today />
      <SearchButton handleSearch={value?.handleSearch} />
    </div>
  );
});

export default MainComponents;
