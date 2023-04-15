import React from "react";
import styles from "./Hotel.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";
import Button from "../common/Button";
import { useGlobalContext } from "../../context/useGlobal";

type PeopleProps = {
  setShow: React.Dispatch<React.SetStateAction<string>>;
};

const PeopleCount: React.FC<PeopleProps> = ({ setShow }) => {
  const value = useGlobalContext();
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
                if (value?.peopleData.adult === 1) return;
                value?.setPeopleData({
                  ...value?.peopleData,
                  adult: value?.peopleData.adult - 1,
                });
              }}
            />
            <p>{value?.peopleData.adult}</p>

            <HiPlusCircle
              size={16}
              color={"var(--main-font-color)"}
              cursor="pointer"
              onClick={() =>
                value?.setPeopleData({
                  ...value?.peopleData,
                  adult: value?.peopleData.adult + 1,
                })
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
                if (value?.peopleData.children === 0) return;
                value?.setPeopleData({
                  ...value?.peopleData,
                  children: value?.peopleData.children - 1,
                });
              }}
            />
            <p>{value?.peopleData.children}</p>

            <HiPlusCircle
              size={16}
              color={"var(--main-font-color)"}
              cursor="pointer"
              onClick={() =>
                value?.setPeopleData({
                  ...value?.peopleData,
                  children: value?.peopleData.children + 1,
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
                if (value?.peopleData.room === 1) return;
                value?.setPeopleData({
                  ...value?.peopleData,
                  room: value?.peopleData.room - 1,
                });
              }}
            />
            <p>{value?.peopleData.room}</p>

            <HiPlusCircle
              size={16}
              color={"var(--main-font-color)"}
              cursor="pointer"
              onClick={() =>
                value?.setPeopleData({
                  ...value?.peopleData,
                  room: value?.peopleData.room + 1,
                })
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
