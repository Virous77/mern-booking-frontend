import React from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css";
import { useGlobalContext } from "../../context/useGlobal";

type DateRangeProps = {
  style?: string;
};

const DateRangeApp: React.FC<DateRangeProps> = React.memo(({ style }) => {
  const value = useGlobalContext();

  return (
    <div className={style} onClick={(e) => e.stopPropagation()}>
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
