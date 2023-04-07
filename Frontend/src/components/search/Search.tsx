import React from "react";
import { useGlobalContext } from "../../context/useGlobal";
import Button from "../common/Button";
import styles from "./Search.module.scss";

type SearchProps = {
  classname: string;
  name?: string;
};

const Search: React.FC<SearchProps> = ({ classname, name }) => {
  const value = useGlobalContext();

  return (
    <div className={name === "mobile" ? styles["search-body"] : ""}>
      <input
        ref={value?.searchRef}
        type="text"
        placeholder="Search Properties...."
        className={classname}
      />
      {name === "mobile" && (
        <Button
          buttonName="Search"
          onClick={() => {
            value?.setFetch(true);
            setTimeout(() => {
              value?.setFetch(false);
            }, 2000);
          }}
          className={styles["mobile-button"]}
        />
      )}
    </div>
  );
};

export default Search;
