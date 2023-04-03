import React from "react";
import styles from "./MainComponent.module.scss";

type TodayProps = {
  handleCalander: () => void;
};

const Today: React.FC<TodayProps> = ({ handleCalander }) => {
  const date = new Date();

  return (
    <div
      className={styles["today"]}
      onClick={(e) => {
        handleCalander();
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
