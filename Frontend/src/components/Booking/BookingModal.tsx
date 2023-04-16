import React, { useMemo, useState } from "react";
import { fetchData } from "../../api/api";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { RoomType } from "../../types/type";
import "./Booking.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import RoomsList from "./RoomsList";
import { useGlobalContext } from "../../context/useGlobal";
import axios from "axios";
import { url } from "../../api/api";

type BookingType = {
  close: () => void;
};

const BookingModal: React.FC<BookingType> = ({ close }) => {
  const [selectedRoom, setSelectedRoom] = useState<string[]>([]);
  const { id } = useParams();
  const value = useGlobalContext();

  const { data } = useQuery(
    "rooms",
    (): Promise<RoomType[]> => fetchData(`/room/${id}`)
  );

  const handleDates = (id: string) => {
    if (selectedRoom.includes(id)) {
      return setSelectedRoom((prev) => prev.filter((ids) => ids !== id));
    }
    setSelectedRoom((prev) => [...prev, id]);
  };

  const dateRanges = useMemo(() => {
    let dates: number[] = [];

    const getRange = (date1: Date, date2: Date) => {
      const startDate = new Date(date1);
      const endDate = new Date(date2);

      const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
      const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));

      for (let i = 0; i <= diffDays; i++) {
        const currentDate = new Date(startDate.getTime() + i * oneDay);
        dates.push(currentDate?.getTime());
      }

      return dates;
    };

    return getRange(value?.dates[0].startDate, value?.dates[0].endDate);
  }, []);

  const handleSubmit = async () => {
    try {
      await Promise.all(
        selectedRoom.map(async (roomId) => {
          const res = await axios.put(`${url}/room/availability/${roomId}`, {
            dates: dateRanges,
          });
          console.log(res.data);
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main onClick={(e) => e.stopPropagation()}>
      <button onClick={handleSubmit}>Cool</button>
      <div>
        <header>
          <h2>Select Rooms</h2>
          <AiOutlineClose onClick={close} />
        </header>

        <div>
          {data?.map((room) => (
            <RoomsList
              data={room}
              key={room._id}
              handleDates={handleDates}
              value={selectedRoom}
              dateRanges={dateRanges}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BookingModal;
