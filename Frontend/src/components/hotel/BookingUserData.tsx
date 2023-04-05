import React, { useState } from "react";
import styles from "./Hotel.module.scss";
import Price from "./Price";
import PeopleCount from "./PeopleCount";
import { peopleDataType } from "./HotelSearch";

export type BookingUserDataProps = {
  price: { maxPrice: string; minPrice: string };
  setPrice: React.Dispatch<
    React.SetStateAction<{
      maxPrice: string;
      minPrice: string;
    }>
  >;
};

export type MoreType = {
  peopleData: peopleDataType;
  setPeopleData: React.Dispatch<React.SetStateAction<peopleDataType>>;
};

const BookingUserData: React.FC<BookingUserDataProps & MoreType> = ({
  price,
  setPrice,
  peopleData,
  setPeopleData,
}) => {
  const [show, setShow] = useState("");

  return (
    <div className={styles["hotel-aside-data"]}>
      <label>Options</label>

      <div className={styles["wrap-price"]}>
        <fieldset onClick={() => setShow("price")}>
          <span>Min Price per Night</span>
          <p>{price.minPrice}</p>
        </fieldset>
        {show === "price" && (
          <Price
            show={show}
            setShow={setShow}
            price={price}
            setPrice={setPrice}
          />
        )}
        <fieldset onClick={() => setShow("price")}>
          <span>Max Price per Night</span>
          <p>{price.maxPrice}</p>
        </fieldset>
      </div>

      <div className={styles["people-count"]}>
        <fieldset onClick={() => setShow("people")}>
          <span>Adult</span>
          <p>6</p>
        </fieldset>

        <fieldset onClick={() => setShow("people")}>
          <span>Children</span>
          <p>6</p>
        </fieldset>
        {show === "people" && (
          <PeopleCount
            setShow={setShow}
            peopleData={peopleData}
            setPeopleData={setPeopleData}
          />
        )}

        <fieldset onClick={() => setShow("people")}>
          <span>Room</span>
          <p>1</p>
        </fieldset>
      </div>
    </div>
  );
};

export default BookingUserData;
