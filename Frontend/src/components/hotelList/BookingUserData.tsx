import React, { useState } from "react";
import styles from "./Hotel.module.scss";
import Price from "./Price";
import PeopleCount from "./PeopleCount";
import { peopleDataType } from "../../types/type";
import { useGlobalContext } from "../../context/useGlobal";

export type BookingUserDataProps = {
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

const BookingUserData: React.FC<BookingUserDataProps & MoreType> = ({}) => {
  const value = useGlobalContext();
  const [show, setShow] = useState("");

  return (
    <div className={styles["hotel-aside-data"]}>
      <label>Options</label>

      <div className={styles["wrap-price"]}>
        <fieldset onClick={() => setShow("price")}>
          <span>Min Price per Night</span>
          <p>{value?.price.minPrice}</p>
        </fieldset>
        {show === "price" && <Price show={show} setShow={setShow} />}
        <fieldset onClick={() => setShow("price")}>
          <span>Max Price per Night</span>
          <p>{value?.price.maxPrice}</p>
        </fieldset>
      </div>

      <div className={styles["people-count"]}>
        <fieldset onClick={() => setShow("people")}>
          <span>Adult</span>
          <p>{value?.peopleData.adult}</p>
        </fieldset>

        <fieldset onClick={() => setShow("people")}>
          <span>Children</span>
          <p>{value?.peopleData.children}</p>
        </fieldset>
        {show === "people" && <PeopleCount setShow={setShow} />}

        <fieldset onClick={() => setShow("people")}>
          <span>Room</span>
          <p>{value?.peopleData.room}</p>
        </fieldset>
      </div>
    </div>
  );
};

export default BookingUserData;
