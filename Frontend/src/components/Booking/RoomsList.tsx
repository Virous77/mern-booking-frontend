import React from "react";
import { RoomType } from "../../types/type";
import { getLocalData } from "../../utils/Data";
import SelectRoom from "./SelectRoom";

type RoomListType = {
  data: RoomType;
  handleDates: (room: string) => void;
  value: string[];
  dateRanges: number[];
};

const RoomsList: React.FC<RoomListType> = ({
  data,
  handleDates,
  value,
  dateRanges,
}) => {
  return (
    <div>
      <div>
        <h4>{data.title}</h4>
        <span>Max people: {data.maxPeople}</span>
        <b>
          {getLocalData("currency") === "usd"
            ? (data.price / 85)?.toFixed(2)
            : data.price}{" "}
          / night
        </b>
        <p>{data.desc}</p>
      </div>
      <SelectRoom
        data={data.roomNumbers}
        handleDates={handleDates}
        value={value}
        dateRanges={dateRanges}
      />
    </div>
  );
};

export default RoomsList;
