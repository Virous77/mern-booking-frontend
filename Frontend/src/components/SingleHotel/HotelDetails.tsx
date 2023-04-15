import React from "react";
import { HotelType } from "../../types/type";
import { getLocalData } from "../../utils/Data";
import styles from "./Hotel.module.scss";
import Button from "../common/Button";
import { useGlobalContext } from "../../context/useGlobal";
import { bookingCounts } from "../../utils/Data";

type HotelDetailsType = {
  data: HotelType | undefined;
};

const HotelDetails: React.FC<HotelDetailsType> = ({ data }) => {
  const value = useGlobalContext();

  const totalPrice =
    data &&
    data?.cheapestPrice *
      (value?.peopleData.room ? value?.peopleData.room : 1) *
      bookingCounts(value?.dates[0]?.startDate, value?.dates[0]?.endDate);

  const totalDays = bookingCounts(
    value?.dates[0]?.startDate,
    value?.dates[0]?.endDate
  );

  const moneyType = totalPrice ? totalPrice : data?.cheapestPrice;

  return (
    <div className={styles["details-main"]}>
      <div className={styles["details-left"]}>
        <h1>{data?.title}</h1>
        <p>{data?.desc}</p>
        <p>
          Book your stay with us and enjoy a complimentary taxi ride! all just
          this in{" "}
          {getLocalData("currency") === "usd"
            ? `$${(data && data?.cheapestPrice / 85)?.toFixed(2)}`
            : `₹${data?.cheapestPrice}`}{" "}
          /night
        </p>
      </div>

      <div className={styles["details-right"]}>
        <h4>
          On the way for {totalDays || 1}
          -night stay!
        </h4>
        <p>
          Wake up to stunning views of the city skyline from our perfectly
          situated hotel. we'are top rating property in this city.
        </p>
        <div className={styles["total-sum"]}>
          <h1>
            {getLocalData("currency") === "usd"
              ? `$${(moneyType && moneyType / 85)?.toFixed(2)}`
              : `₹${totalPrice ? totalPrice : data?.cheapestPrice}`}
          </h1>{" "}
          <span>({totalDays || 1} nights)</span>
        </div>
        <Button
          buttonName="Reserve a Book Now!"
          onClick={() => {}}
          className={styles["details-button"]}
        />
      </div>
    </div>
  );
};

export default HotelDetails;
