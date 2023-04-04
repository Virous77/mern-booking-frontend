import React from "react";
import styles from "./MainComponent.module.scss";
import { useGlobalContext } from "../../context/useGlobal";

const SearchButton = () => {
  const value = useGlobalContext();
  return (
    <button className={styles["search-button"]} onClick={value?.handleSearch}>
      Search
    </button>
  );
};

export default SearchButton;
