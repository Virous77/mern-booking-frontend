import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import styles from "./Search.module.scss";
import { HiOutlineSearchCircle } from "react-icons/hi";

type Search = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

const Search: React.FC<Search> = ({ search, setSearch }) => {
  const [show, setShow] = useState(false);
  const body = document.querySelector("body");

  return (
    <>
      {!show ? (
        <HiOutlineSearchCircle
          size={21}
          cursor="pointer"
          onClick={(e) => {
            e.stopPropagation();
            setShow(true);
          }}
          color={"var(--main-font-color)"}
          className={styles["animate"]}
        />
      ) : (
        <input
          type="text"
          placeholder="Search Properties...."
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
          onClick={(e) => e.stopPropagation()}
          onBlur={() => setShow(false)}
        />
      )}
    </>
  );
};

export default Search;
