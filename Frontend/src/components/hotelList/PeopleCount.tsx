import React from "react";
import styles from "./Hotel.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { MoreType } from "./BookingUserData";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import Button from "../common/Button";

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
        <h4>Accommodation</h4>
        <AiOutlineClose
          size={18}
          color={"var(--main-font-color)"}
          cursor="pointer"
          onClick={() => setShow("")}
        />
      </div>

      <div className={styles["people-wrap"]}>
        <div className={styles["people-sub"]}>
          <h4>Adult</h4>

          <div className={styles["people-sub2"]}>
            <HiMinusCircle
              size={16}
              color={"var(--main-font-color)"}
              cursor="pointer"
              onClick={() => {
                if (peopleData.adult === 1) return;
                setPeopleData({ ...peopleData, adult: peopleData.adult - 1 });
              }}
            />
            <p>{peopleData.adult}</p>

            <HiPlusCircle
              size={16}
              color={"var(--main-font-color)"}
              cursor="pointer"
              onClick={() =>
                setPeopleData({ ...peopleData, adult: peopleData.adult + 1 })
              }
            />
          </div>
        </div>

        <div className={styles["people-sub"]}>
          <h4>Children</h4>

          <div className={styles["people-sub2"]}>
            <HiMinusCircle
              size={16}
              color={"var(--main-font-color)"}
              cursor="pointer"
              onClick={() => {
                if (peopleData.children === 0) return;
                setPeopleData({
                  ...peopleData,
                  children: peopleData.children - 1,
                });
              }}
            />
            <p>{peopleData.children}</p>

            <HiPlusCircle
              size={16}
              color={"var(--main-font-color)"}
              cursor="pointer"
              onClick={() =>
                setPeopleData({
                  ...peopleData,
                  children: peopleData.children + 1,
                })
              }
            />
          </div>
        </div>

        <div className={styles["people-sub"]}>
          <h4>Room</h4>

          <div className={styles["people-sub2"]}>
            <HiMinusCircle
              size={16}
              color={"var(--main-font-color)"}
              cursor="pointer"
              onClick={() => {
                if (peopleData.room === 1) return;
                setPeopleData({ ...peopleData, room: peopleData.room - 1 });
              }}
            />
            <p>{peopleData.room}</p>

            <HiPlusCircle
              size={16}
              color={"var(--main-font-color)"}
              cursor="pointer"
              onClick={() =>
                setPeopleData({ ...peopleData, room: peopleData.room + 1 })
              }
            />
          </div>
        </div>
      </div>
      <Button
        buttonName="Submit"
        onClick={() => setShow("")}
        className={styles["price-button"]}
      />
    </div>
  );
};

export default PeopleCount;
