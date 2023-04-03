import React, { Dispatch, SetStateAction } from "react";
import styles from "./Search.module.scss";

type Search = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const Search: React.FC<Search> = ({ search, setSearch }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search Properties...."
        onChange={(e) => setSearch(e.target.value)}
        className={styles.search}
        value={search}
      />
    </>
  );
};

export default Search;
