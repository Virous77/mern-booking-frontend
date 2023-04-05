import React from "react";
import styles from "./Hotel.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { MoreType } from "./BookingUserData";

type PeopleProps = {
  setShow: React.Dispatch<React.SetStateAction<string>>;
};

const PeopleCount: React.FC<PeopleProps & MoreType> = ({
  setShow,
  peopleData,
  setPeopleData,
}) => {
  return (
    <div className={styles["people-main"]}>
      <div className={styles["price-head"]}>
        <h4>Price</h4>
        <AiOutlineClose
          size={18}
          color={"var(--main-font-color)"}
          cursor="pointer"
          onClick={() => setShow("")}
        />
      </div>
    </div>
  );
};

export default PeopleCount;
