import React from "react";
import styles from "./Search.module.scss";
import { useGlobalContext } from "../../context/useGlobal";

const Search = () => {
  const value = useGlobalContext();

  return (
    <>
      <input
        ref={value?.searchRef}
        type="text"
        placeholder="Search Properties...."
        className={styles.search}
      />
    </>
  );
};

export default Search;
