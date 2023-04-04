import React from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import styles from "../search/MainComponent.module.scss";
import { useGlobalContext } from "../../context/useGlobal";

const DateRangeApp = React.memo(() => {
  const value = useGlobalContext();

  return (
    <div className={styles["date-main"]} onClick={(e) => e.stopPropagation()}>
      <DateRange
        editableDateInputs={true}
        onChange={(item: any) => value?.handleDates(item)}
        moveRangeOnFirstSelection={false}
        ranges={value?.dates}
        className="date"
        minDate={new Date()}
      />
    </div>
  );
});

export default DateRangeApp;
