import React from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import styles from "../search/MainComponent.module.scss";

type DateRangeProps = {
  dates: any;
  handleDates: (item: any) => void;
};

const DateRangeApp: React.FC<DateRangeProps> = ({ dates, handleDates }) => {
  return (
    <div className={styles["date-main"]} onClick={(e) => e.stopPropagation()}>
      <DateRange
        editableDateInputs={true}
        onChange={(item: any) => handleDates(item)}
        moveRangeOnFirstSelection={false}
        ranges={dates}
        className="date"
        minDate={new Date()}
      />
    </div>
  );
};

export default DateRangeApp;
