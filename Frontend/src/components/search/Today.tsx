import React from "react";
import styles from "./MainComponent.module.scss";
import { useGlobalContext } from "../../context/useGlobal";

const Today = () => {
  const date = new Date();
  const value = useGlobalContext();

  return (
    <div
      className={styles["today"]}
      onClick={(e) => {
        value?.setShowCalander(true);
        e.stopPropagation();
      }}
    >
      <p>
        {date.getDate()} / {date.getMonth()} / {date.getFullYear()}
      </p>
      <p>
        {date.getDate() + 4} / {date.getMonth()} / {date.getFullYear()}
      </p>
    </div>
  );
};

export default Today;
