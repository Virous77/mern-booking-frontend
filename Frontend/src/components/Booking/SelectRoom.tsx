import React, { useEffect } from "react";
import { RoomBookType } from "../../types/type";
import { useGlobalContext } from "../../context/useGlobal";

type SelectRoomType = {
  data: RoomBookType[];
  handleDates: (room: string) => void;
  value: string[];
  dateRanges: number;
};

const SelectRoom: React.FC<SelectRoomType> = ({
  data,
  handleDates,
  value,
  dateRanges,
}) => {
  return (
    <div>
      {data.map((room) => (
        <div key={room.number}>
          <p>{room.number}</p>
          <input
            type="checkbox"
            onClick={() => handleDates(room._id)}
            checked={value?.find((id) => id === room._id)}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectRoom;
